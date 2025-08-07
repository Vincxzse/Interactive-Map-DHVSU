import express from "express";
import bcrypt from "bcrypt";
import pool from "../database/db.js";

const router = express.Router();

router.put("/change-password", async (req, res) => {
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

router.put("/change-username", async(req, res) => {
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

export default router;