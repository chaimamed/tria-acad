"use strict";

var _require = require("../config/db"),
    pool = _require.pool;

var bcrypt = require("bcryptjs"); // 🔐 إنشاء مستخدم جديد


var createUser = function createUser(name, email, password) {
  var client, salt, hashedPassword, result;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 6:
          salt = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 9:
          hashedPassword = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(client.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, hashedPassword]));

        case 12:
          result = _context.sent;
          return _context.abrupt("return", result.rows[0]);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          console.error("❌ Error creating user:", _context.t0);
          throw _context.t0;

        case 20:
          _context.prev = 20;
          client.release();
          return _context.finish(20);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 16, 20, 23]]);
}; // 🔎 البحث عن مستخدم بالبريد الإلكتروني


var findUserByEmail = function findUserByEmail(email) {
  var client, result;
  return regeneratorRuntime.async(function findUserByEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(client.query("SELECT * FROM users WHERE email = $1", [email]));

        case 6:
          result = _context2.sent;
          return _context2.abrupt("return", result.rows[0]);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          console.error("❌ Error finding user:", _context2.t0);
          throw _context2.t0;

        case 14:
          _context2.prev = 14;
          client.release();
          return _context2.finish(14);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 10, 14, 17]]);
}; // ✅ مقارنة كلمة السر


var comparePassword = function comparePassword(enteredPassword, storedPasswordHash) {
  return regeneratorRuntime.async(function comparePassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(bcrypt.compare(enteredPassword, storedPasswordHash));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  createUser: createUser,
  findUserByEmail: findUserByEmail,
  comparePassword: comparePassword
};