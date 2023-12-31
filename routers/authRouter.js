const express = require("express");
const router = express.Router()

// Require all the controller functions from authController.js
const { postLogin, getLogin, getLogout, getRegister,postRegister } = require("../controllers/authController");

// Attach the controllers to all authentication routes.
router.get("/login", getLogin);
router.post("/login", postLogin)
router.get("/logout", getLogout);
router.get("/register", getRegister);
router.post("/register", postRegister)

module.exports = router;