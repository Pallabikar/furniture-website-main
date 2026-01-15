/**
 * ARCHIK BACKEND – PRODUCTION READY SERVER
 */

import dotenv from "dotenv";
dotenv.config(); // 🔥 MUST BE FIRST

import express from "express";
import cors from "cors";
import User from './src/models/User.js';

import morgan from "morgan";
import connectDB from "./src/lib/mongodb.js";
import productRoutes from "./routes/productRoutes.js";
// ---------------- INIT APP ----------------
const app = express();

// ---------------- MIDDLEWARES ----------------
app.use(cors({
  origin: "*", // change to Vercel domain later
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ---------------- ENV CHECK ----------------
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing in .env file");
  process.exit(1);
}

// ---------------- DB CONNECTION ----------------
connectDB()
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

 //🔥 THIS WAS MISSING
app.use("/api/products", productRoutes);
// ---------------- ROUTES ----------------
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Archik Backend API is running 🚀",
  });
});

// Example API (use your actual routes)
app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// ---------------- ERROR HANDLER ----------------
app.use((err, req, res, next) => {
  console.error("❌ API Error:", err.message);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ---------------- SERVER START ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
