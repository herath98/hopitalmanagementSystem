import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();
const app =express();

app.listen(3000,()=> {
    console.log("Server is running om port 3000");
});

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB is connect");
})
.catch((err) => {
    console.log(err);
});

app.use('/api/user', userRoutes);

app.use((err, req, res, next) => {
    // Set status code to the error's status or default to 500 if not provided
    const statusCode = err.statusCode || 500;
    // Set error message to the error's message or default to a generic message if not provided
    const message = err.message || 'Something went wrong';
    // Send the error response with status code and message
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});