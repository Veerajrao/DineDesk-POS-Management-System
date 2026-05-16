const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
//const config=require("./config/config");

const register = async (req, res, next) => {
    try {
        const { name, phone, email, password, role} = req.body || {};
        if(!name || !password || !phone || !email || !role){
            return next(createHttpError(400, "All fields are required!"));
        }
        const isuserPresent = await User.findOne({email});
        if(isuserPresent){
            return next(createHttpError(400, "User Already Exist!"));
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
    try{
        const { email, password} = req.body || {};
        if(!email || !password){
            return next(createHttpError(400,"All field are required"));
        }
        const userLogin = await User.findOne({email});
        if(!userLogin){
            return next(createHttpError(401,"Invalid credentials"));
        }

        const isMatch = await bcrypt.compare(password, userLogin.password);
        if(!isMatch){
            return next(createHttpError(401,"Invalid Password"));
        }
        //const accessToken = jwt.sign({_id: userLogin._id}, config.accessTokenSecret,{expiresIn: '1d'});
        const accessToken = jwt.sign({_id: userLogin._id},process.env.JWT_SECRET,{expiresIn: '1d'});
        res.cookie('accessToken', accessToken,{
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httOnly: true,
            sameSite: 'none',
            secure: true
        })
        res.status(200).json({success: true, message: "User Login Successfully!",data: userLogin});
    }
    catch(error){
        next(error);
    }
}
const getUserData = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id);
        res.status(200).json({success: true, data: user});
    }catch(error){
        next(error);
    }
}

const logout = async (req, res, next) =>{
    try{
        res.clearCookie('accessToken');
        res.status(200).json({success: true, message: "User Logout Successfully!"});
    }catch(error){
        next(error);
    }
}

module.exports = {register, login, getUserData, logout}