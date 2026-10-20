const bcrypt = require('bcryptjs');
const { pool } = require('../config/db');
const { generateToken } = require('../utils/jwt');
const User = require("../models/User"); // استبدلي حسب هيكلتك

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashed = await bcrypt.hash(password, 12);

    const newUser = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, hashed]
    );

    const token = generateToken(newUser.rows[0].id);

    res.status(201).json({ user: newUser.rows[0], token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ✅ LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.rows[0].id);

    // يمكن ترجعي name و email فقط إذا ما تحبيش ترجع كلمة السر حتى وإن كانت مشفرة
    res.status(200).json({
      user: {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [req.user.id]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: user.rows[0] });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



module.exports = { 
  register,
  login,
  getProfile
};

