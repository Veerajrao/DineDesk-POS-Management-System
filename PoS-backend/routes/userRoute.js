const express=require("express");
const { login, register } = require("../controllers/userController");
const router = express.Router();

//Authentication routes
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;