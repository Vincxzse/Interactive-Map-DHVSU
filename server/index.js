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

// Handle Login
app.post("/login", async(req, res) => {
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

app.put("/update-user", async(req, res) => {
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

app.post("/password-confirmation", async (req, res) => {
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

app.get("/get-users", async (req, res) => {
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

app.delete("/delete-user/:id", async (req, res) => {
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

app.get("/get-super-admin", async (req, res) => {
    const superAdmin = await pool.query("SELECT * FROM customer_accounts WHERE role = 'super admin'");

    const superAdminName = superAdmin.rows[0].username;
    res.send(`Hi, ${superAdminName}.`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
