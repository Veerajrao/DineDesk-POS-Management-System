const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Correct import

const isVerifiedUser = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            return next(createHttpError(401, "Please provide token"));
        }

        const decodeToken = jwt.verify(accessToken, process.env.JWT_SECRET);

        const user = await User.findById(decodeToken._id);
        if (!user) {
            return next(createHttpError(401, "User does not exist"));
        }

        req.user = user;
        next();
    } catch (error) {
        //console.error("JWT Error:", error.message);  helpful for debugging
        return next(createHttpError(401, "Invalid Token"));
    }
};

module.exports = { isVerifiedUser };
