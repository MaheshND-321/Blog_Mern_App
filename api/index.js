import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRouter from './routes/post.route.js';
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO, {
    tlsAllowInvalidCertificates: true, 
    tls: true
}).then(() => {
    console.log("MongoDB is connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});


const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
    console.log("Server is running on port 3000!!!");
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal sever error";
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
}
)
    
