const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: "Email Must be in validate format!",
        }
    },
    phone : {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                    return /\d{10}/.test(v);
                },
                message: "Phone Number Must be in 10 digit Number!",
        }
    },
    password : {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=(?:.*\d){3,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(v);
            },
            message:"Password must contain 8 characters, 3 digits and 1 special character!",
        },
},
    role : {
        type: String,
        required: true,
    },
},
{timestamps : true})
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
 

module.exports = mongoose.model("User",userSchema);