import express from "express";
import bcrypt from "bcrypt";
import pool from "../database/db.js";

const router = express.Router();

router.get("/get-users", async (req, res) => {
    try {
        const allUsers = await pool.query(
            'SELECT * FROM customer_accounts ORDER BY id ASC'
        );
        res.status(200).json(allUsers.rows);
    } catch (error) {
        console.error('Failed to fetch data: ', error);
        res.status(500).json({ error: 'Failed to fetch data.' })
    }
});

router.put("/update-user", async(req, res) => {
    try {
        const { userID, username, email, role } = req.body;
        const userQuery = await pool.query(
            'SELECT * FROM customer_accounts WHERE id = $1',
            [userID]
        );
        if (userQuery.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            const updateQuery = await pool.query(
                'UPDATE customer_accounts SET username = $1, email = $2, role = $3 WHERE id = $4',
                [username, email, role, userID]
            );
            return res.status(200).json({ message: 'User: ' + userID + ' was updated.', user: userQuery.rows[0] });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Internal server error.' });
    }
});

router.delete("/delete-user/:id", async (req, res) => {
    const userID = req.params.id;

    try {
        const deleteUser = await pool.query("DELETE FROM customer_accounts WHERE id = $1", [userID]);
        if (deleteUser.rowCount === 0) {
            return res.status(400).json({ message: "User not found." });
        }
        
        res.status(200).json({ message: "User deleted successfully!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

router.patch("/admin-change-password", async (req, res) => {
    const { uid, oldPassword, newPassword } = req.body;
    try {
        const getUser = await pool.query(
            "SELECT * FROM customer_accounts WHERE id = $1",
            [uid]
        );
        const isValid = await bcrypt.compare(oldPassword, getUser.rows[0].password);
        if (!isValid) {
            return res.status(400).json({ message: "Incorrect Password. Please try again." });
        }
        if (oldPassword === newPassword) {
            return res.status(400).json({ message: "New password cannot be the same as the old password." });
        }
        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
        await pool.query(
            "UPDATE customer_accounts SET password = $1 WHERE id = $2",
            [hashedNewPassword, uid]
        );
        return res.status(200).json({ message: "Password updated successfully!" });
    } catch (err) {
        console.error("Error updating password:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/password-confirmation", async (req, res) => {
    try {
        const { adminID, password } = req.body;
        const adminQuery = await pool.query(
            'SELECT * FROM customer_accounts WHERE id = $1',
            [adminID]
        );
        const adminPassword = adminQuery.rows[0].password;
        const isValid = await bcrypt.compare(password, adminPassword);

        if (isValid) {
            const matched = true;
            return res.status(200).json({ message: "Password matched", response: matched });
        } else {
            console.log("Passwords failed to match.");
            return res.status(401).json({ message: "Invalid Password." });
        }

    } catch (err) {
        
    }
});

router.get("/get-super-admin", async (req, res) => {
    const superAdmin = await pool.query("SELECT * FROM customer_accounts WHERE role = 'super admin'");

    const superAdminName = superAdmin.rows[0].username;
    res.send(`Hi, ${superAdminName}.`);
});

export default router;