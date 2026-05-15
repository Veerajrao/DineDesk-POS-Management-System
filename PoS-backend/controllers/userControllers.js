const createHttpError = require("http-errors");
const User = require("../models/userModel");
const register = async (req, res, next) => {
    try {
        const { name, phone, email, password, role} = req.body;
        if(!name || !password || !phone || !email || !role){
            const error = createHttpError(400, "All fields are required!");
            next(error);
        }
        
        const isuserPresent = await User.findOne({email});
        if(isuserPresent){
            const error = createHttpError(400, "User Already Exist!");
            next(error);
        }

        const user = { name, phone, email, password, role};
        const newUser = User(user);
        await newUser.save();

        res.status(201).json({success: true, message: "New User Created!", data: newUser});
        
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) =>{

}

module.exports = {register, login}