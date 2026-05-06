require("dotenv").config();

const config = Object.freeze({
   port: process.env.PORT || 5000,
   databaseURI: process.env.MONGODB_URI || "mongodb://localhost:27017/DineDesk-db",
   nodeEnv: process.env.NODE_ENV || "development",
   accessTokenSecret: process.env.JWT_SECRET,
});

module.exports=config;