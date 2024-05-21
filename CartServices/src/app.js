<<<<<<< HEAD
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./DB/db.connection.js";
import cartRoute from "./Routes/cart.route.js";
import { authenticate } from "./middlewares/auth.middleware.js";
=======
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './DB/db.connection.js';
import { authenticate } from './middlewares/auth.middleware.js';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();  // This ensures the environment variables are loaded early
>>>>>>> 26bef40b0eb2315561be0d4e03e9b74a49b920a4

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Connect to MongoDB
connectDB();  // Ensure this is called after dotenv.config()

// Routes (Add your route handlers here)

// Error handling middleware
app.use(authenticate);

export { app };
