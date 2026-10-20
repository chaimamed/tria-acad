"use strict";

var express = require('express');

var dotenv = require('dotenv');

var cors = require('cors');

var helmet = require('helmet');

var rateLimit = require('express-rate-limit');

var authRoutes = require('./routes/auth');

var _require = require('./config/db'),
    connectDB = _require.connectDB;

dotenv.config();
console.log("JWT_SECRET from .env is:", process.env.JWT_SECRET);
var app = express();
var PORT = process.env.PORT || 5000; // Middleware

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})); // DB connection

connectDB(); // Routes

app.use('/api', authRoutes);
app.listen(PORT, function () {
  console.log("\uD83D\uDE80 Server running on http://localhost:".concat(PORT));
});