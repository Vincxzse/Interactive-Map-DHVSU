import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Detect environment (local vs production)
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
    connectionString: isProduction
        ? process.env.DATABASE_URL         // Render (production)
        : process.env.LOCAL_DATABASE_URL,  // Local dev
    ssl: isProduction
        ? { rejectUnauthorized: false }    // Required for Render
        : false,                           // Local doesn’t need SSL
});

export default pool;
