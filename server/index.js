import express from 'express';
import cors from 'cors';
import pool from './database/db.js';
import bcrypt from 'bcrypt';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Handle Register
app.post("/register-account", async(req, res) => {
    try {
        const { email, username, password } = req.body;
        const defaultRole = 'user';
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userExists = await pool.query(
            "SELECT * FROM customer_accounts WHERE email = $1 OR username = $2",
            [email, username]
        );
        
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "Username or email already exists" });
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

// Handle Login
app.post("/login", async(req, res) => {
    try {
        const { username, password } = req.body;

        const userQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE username = $1",
            [username]
        );

        // Get numbers of users / admins / super admins / overall
        const totalUsersQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'user'"
        )
        const totalUsers = totalUsersQuery.rows.length;
        const totalAdminsQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'admin'"
        );
        const totalAdmins = totalAdminsQuery.rows.length;
        const totalSuperAdminsQuery = await pool.query(
            "SELECT * FROM customer_accounts WHERE role = 'super admin'"
        );
        const totalSuperAdmins = totalSuperAdminsQuery.rows.length;
        const totalOverallQuery = await pool.query(
            "SELECT * FROM customer_accounts"
        );
        const totalOverall = totalOverallQuery.rows.length;

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
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Change Password
app.put("/change-password", async (req, res) => {
    try {
        const { userID, oldPassword, newPassword } = req.body;

        // Check if user exists
        const userQuery = await pool.query("SELECT * FROM customer_accounts WHERE id = $1", [userID]);

        if (userQuery.rows.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }

        const user = userQuery.rows[0];

        // Validate old password
        const isValid = await bcrypt.compare(oldPassword, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Old password is incorrect" });
        }

        // Hash new password
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

        // Update password
        await pool.query("UPDATE customer_accounts SET password = $1 WHERE id = $2", [hashedNewPassword, userID]);

        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// Update Username
app.put("/change-username", async(req, res) => {
    try {
        const { userID, newUsername } = req.body;
        const userQuery = await pool.query("SELECT * FROM customer_accounts WHERE id = $1", [userID]);
        
        if (userQuery.rows.length === 0) {
            return res.status(400).json({message: "User not found"});
        }

        await pool.query("UPDATE customer_accounts SET username = $1 WHERE id = $2", [newUsername, userID]);
        res.status(200).json({message: "Username updated successfully!"});
    } catch (err) {
        console.error(err.message);
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
