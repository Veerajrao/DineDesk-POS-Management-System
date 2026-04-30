require("dotenv").config();
const express=require("express");
const connectDB=require("./config/database");
const config=require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");
const app=express();

const PORT=config.port;
connectDB();

app.get("/",(req,res,next) => {

    const err=createHttpError(404, "something went wrong!");
    next(err);

    res.json({message:"Hello from POS Server!"});
})

//globalErrorHandler
app.use(globalErrorHandler);


app.listen(PORT, () =>{
    console.log(`POS Server is listening on port ${PORT}`);
})