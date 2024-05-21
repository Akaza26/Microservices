import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./DB/db.connection.js";
import cartRoute from "./routes/product.routes.js";
import { authenticate } from "./middlewares/auth.middleware.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/cart", cartRoute);

// Error handling middleware
app.use(authenticate);

export { app };
