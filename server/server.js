import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "https://psu-citizen-charter-client.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// Use Routes
app.use(authRoutes);
app.use(adminRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "API is running 🚀" });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});

// Error handler (for unexpected errors)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});