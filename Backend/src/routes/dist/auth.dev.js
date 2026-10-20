"use strict";

// 📁 backend/routes/authRoutes.js
var express = require('express');

var router = express.Router();

var _require = require('../controllers/authcontrollers'),
    register = _require.register,
    login = _require.login,
    getProfile = _require.getProfile;

var _require2 = require("../middleware/auth"),
    protect = _require2.protect;

router.post('/register', register);
router.post('/login', login);
router.get("/profile", protect, getProfile);
module.exports = router;