import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use(authRoutes);
app.use(adminRoutes);
app.use(userRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
