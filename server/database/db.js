import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Detect environment (local vs production)
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
    connectionString: isProduction
        ? process.env.DATABASE_URL
        : process.env.LOCAL_DATABASE_URL,
    ssl: isProduction
        ? { rejectUnauthorized: false }
        : false,
});

export default pool;
