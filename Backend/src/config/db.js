const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('🟢 PostgreSQL Connected');
  } catch (err) {
    console.error('🔴 Database connection error', err);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
