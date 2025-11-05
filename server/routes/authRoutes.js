import express from "express";
import bcrypt from "bcrypt";
import pool from "../database/db.js";

const router = express.Router();

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
        console.log("Pakyu")
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;