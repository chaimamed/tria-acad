const { pool } = require("../config/db");
const bcrypt = require("bcryptjs");

// 🔐 إنشاء مستخدم جديد
const createUser = async (name, email, password) => {
  const client = await pool.connect();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    return result.rows[0];
  } catch (err) {
    console.error("❌ Error creating user:", err);
    throw err;
  } finally {
    client.release();
  }
};

// 🔎 البحث عن مستخدم بالبريد الإلكتروني
const findUserByEmail = async (email) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    return result.rows[0];
  } catch (err) {
    console.error("❌ Error finding user:", err);
    throw err;
  } finally {
    client.release();
  }
};

// ✅ مقارنة كلمة السر
const comparePassword = async (enteredPassword, storedPasswordHash) => {
  return await bcrypt.compare(enteredPassword, storedPasswordHash);
};

module.exports = {
  createUser,
  findUserByEmail,
  comparePassword,
};
