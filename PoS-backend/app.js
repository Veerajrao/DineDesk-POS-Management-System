require("dotenv").config();
const express=require("express");
const connectDB=require("./config/database");
const config=require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");
const app=express();

const PORT=config.port;
connectDB();
//middlewares
app.use(express.json());

//root ends points
app.get("/",(req,res,next) => {

    /*const err=createHttpError(404, "something went wrong!");
    //next(err);
    throw err;*/

    res.json({message:"Hello from POS Server!"});
})
//Other endpoints
app.use("/api/user", require("./routes/userRoute"));

//globalErrorHandler
app.use(globalErrorHandler);

//server
app.listen(PORT, () =>{
    console.log(`POS Server is listening on port ${PORT}`);
})