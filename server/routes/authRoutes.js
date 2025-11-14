import express from "express";
import bcrypt from "bcrypt";
import pool from "../database/db.js";
import { sendVerificationEmail, sendPasswordResetEmail } from "./brevo.js";

const router = express.Router();
const resetTokens = new Map();

router.post("/register-account", async(req, res) => {
    try {
        let { email, username, password } = req.body;
        email = email.toLowerCase();
        username = username.trim();
        const defaultRole = 'user';
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userExists = await pool.query(
            "SELECT * FROM customer_accounts WHERE email = $1",
            [email]
        );
        
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }
        
        const newAccount = await pool.query(
            "INSERT INTO customer_accounts(username, email, password, role) VALUES($1, $2, $3, $4) RETURNING *",
            [username, email, hashedPassword, defaultRole]
        )

        res.json(newAccount.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

router.post("/login", async(req, res) => {
    try {
        let { email, password } = req.body;
        email = email.toLowerCase();

        const userQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE email = $1",
            [email]
        );

        // Get numbers of users / admins / super admins / overall

        // Get All Customers
        const totalUsersQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'user'"
        )
        const totalUsers = totalUsersQuery.rows.length;

        // Get All Admins
        const totalAdminsQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'admin'"
        );
        const totalAdmins = totalAdminsQuery.rows.length;

        // Get All Super Admins
        const totalSuperAdminsQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'super admin'"
        );
        const totalSuperAdmins = totalSuperAdminsQuery.rows.length;

        // Get All Users
        const totalOverallQuery = await pool.query(
            "SELECT * FROM customer_accounts"
        );
        const totalOverall = totalOverallQuery.rows.length;
        const overallUsers = totalOverallQuery.rows;

        if (userQuery.rows.length === 0) {
            return res.status(400).json({ message: "User not found." });
        }

        const user = userQuery.rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({ message: "Incorrect password." });
        }

        res.status(200).json({ 
            message: "Login Successful", 
            user: user, 
            totalUsers: totalUsers,
            totalAdmins: totalAdmins,
            totalSuperAdmins: totalSuperAdmins,
            totalOverall: totalOverall,
            overallUsers: overallUsers,
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.patch("/change-username", async (req, res) => {
    try {
        const { username, id } = req.body
        const exists = await pool.query("SELECT * FROM customer_accounts WHERE username = $1 AND id != $2", [username, id])
        if (exists.rows.length > 0) return res.status(400).json({ message: "User with this username already exists"})
        const result = await pool.query("UPDATE customer_accounts SET username = $1 WHERE id = $2", [username, id])
        return res.status(200).json({ message: "Username has been updated" })
    } catch (err) {
        console.error("Change Username Failed: ", err)
        return res.status(500).json({ message: "An error has occurred while changing username" })
    }
})

router.patch("/change-email", async (req, res) => {
    try {
        const { email, id } = req.body
        const exists = await pool.query("SELECT * FROM customer_accounts WHERE email = $1 AND id != $2", [email, id])
        if (exists.rows.length > 0) return res.status(400).json({ message: "User with this email already exists"})
        const result = await pool.query("UPDATE customer_accounts SET email = $1 WHERE id = $2", [email, id])
        return res.status(200).json({ message: "Email has been updated" })
    } catch (err) {
        console.error("Change Email Failed: ", err)
        return res.status(500).json({ message: "An error has occurred while changing email" })
    }
})

router.patch("/change-password", async (req, res) => {
    try {
        const { currentPassword, newPassword, id } = req.body;
        // Get user's current password hash
        const userQuery = await pool.query(
            "SELECT password FROM customer_accounts WHERE id = $1",
            [id]
        );
        
        if (userQuery.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const user = userQuery.rows[0];
        
        // Verify current password
        const isValid = await bcrypt.compare(currentPassword, user.password);
        
        if (!isValid) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }
        
        // Hash new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        
        // Update password
        await pool.query(
            "UPDATE customer_accounts SET password = $1 WHERE id = $2",
            [hashedPassword, id]
        );
        
        return res.status(200).json({ message: "Password has been updated successfully" });
    } catch (err) {
        console.error("Change Password Failed: ", err);
        return res.status(500).json({ message: "An error has occurred while changing password" });
    }
});

router.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body;
        
        // Check if user exists
        const userQuery = await pool.query(
            "SELECT id, email, username FROM customer_accounts WHERE email = $1",
            [email.toLowerCase()]
        );
        
        if (userQuery.rows.length === 0) {
            // Don't reveal if email exists for security
            return res.status(200).json({ message: "If an account exists, a reset code has been sent to your email." });
        }
        
        const user = userQuery.rows[0];
        
        // Generate reset token (6-digit code)
        const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Store token with expiry (15 minutes)
        resetTokens.set(email.toLowerCase(), {
            token: resetToken,
            userId: user.id,
            expiry: Date.now() + 15 * 60 * 1000
        });
        
        // Send email using your existing function
        await sendPasswordResetEmail(email, resetToken, user.username);
        
        return res.status(200).json({ 
            message: "If an account exists, a reset code has been sent to your email." 
        });
        
    } catch (err) {
        console.error("Forgot Password Failed: ", err);
        return res.status(500).json({ message: "An error occurred. Please try again." });
    }
});

router.post("/verify-reset-token", async (req, res) => {
    try {
        const { email, token } = req.body;
        
        const storedData = resetTokens.get(email.toLowerCase());
        
        if (!storedData) {
            return res.status(400).json({ message: "Invalid or expired reset code." });
        }
        
        if (Date.now() > storedData.expiry) {
            resetTokens.delete(email.toLowerCase());
            return res.status(400).json({ message: "Reset code has expired." });
        }
        
        if (storedData.token !== token) {
            return res.status(400).json({ message: "Invalid reset code." });
        }
        
        return res.status(200).json({ message: "Code verified successfully." });
        
    } catch (err) {
        console.error("Verify Token Failed: ", err);
        return res.status(500).json({ message: "An error occurred. Please try again." });
    }
});

router.post("/reset-password", async (req, res) => {
    try {
        const { email, token, newPassword } = req.body;
        
        const storedData = resetTokens.get(email.toLowerCase());
        
        if (!storedData) {
            return res.status(400).json({ message: "Invalid or expired reset code." });
        }
        
        if (Date.now() > storedData.expiry) {
            resetTokens.delete(email.toLowerCase());
            return res.status(400).json({ message: "Reset code has expired." });
        }
        
        if (storedData.token !== token) {
            return res.status(400).json({ message: "Invalid reset code." });
        }
        
        // Hash new password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        
        // Update password
        await pool.query(
            "UPDATE customer_accounts SET password = $1 WHERE id = $2",
            [hashedPassword, storedData.userId]
        );
        
        // Clear token
        resetTokens.delete(email.toLowerCase());
        
        return res.status(200).json({ message: "Password has been reset successfully." });
        
    } catch (err) {
        console.error("Reset Password Failed: ", err);
        return res.status(500).json({ message: "An error occurred. Please try again." });
    }
});

export default router;