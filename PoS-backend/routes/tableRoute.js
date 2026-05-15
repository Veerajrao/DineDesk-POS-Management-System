const express = require("express");
const router = express.Router();
const { isVerifiedUser }

router.route("/").post(isVerifiedUser, addTable);
router.route("/").post(isVerifiedUser, getTable);
router.route("/:id ").post(isVerifiedUser, addTable);