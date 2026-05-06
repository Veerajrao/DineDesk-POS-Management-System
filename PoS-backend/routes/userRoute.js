const express=require("express");
const { login, register, getUserData } = require("../controllers/userController");
const { isVerifiedUser }= require("../middleware/tokenVerification");
const router = express.Router();

//Authentication routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(isVerifiedUser ,getUserData);


module.exports = router;