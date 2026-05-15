require("dotenv").config();
const express = require("express");
const connectDB=require("./config/database");
const config=require("./config/config");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const PORT=config.port;
connectDB();
//middlewares
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));
app.use(express.json());//parse income req in json format
app.use(cookieParser());

//root ends points
app.get("/",(req,res,next) => {

    /*const err=createHttpError(404, "something went wrong!");
    //next(err);
    throw err;*/

    res.json({message:"Hello from POS Server!"});
})
//Other endpoints
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoutes"));
app.use("/api/table",  require("./routes/tableRoute"));

//globalErrorHandler
app.use(globalErrorHandler);

//server
app.listen(PORT, () =>{
    console.log(`POS Server is listening on port ${PORT}`);
})