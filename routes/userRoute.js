const express = require("express");
const router = express.Router();
//auth middleware
const authMiddleware = require("../middlewares/authMiddleware");

const { register, login, checkUser } = require("../controller/userController");
// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

// Check user
router.get("/check", authMiddleware, checkUser);

module.exports = router;
