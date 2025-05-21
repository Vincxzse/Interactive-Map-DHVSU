import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "interactive-map",
    password: "vincxzse022004",
    port: 5432,
});

export default pool;