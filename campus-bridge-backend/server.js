import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"; // Add this import
import bcrypt from "bcryptjs"; // Add this import
import aiRoutes from "./routes/aiRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });
console.log("Environment variables:", process.env);

const app = express();

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Optional chaining
  
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/ai", authenticateToken, aiRoutes); // 👈 Protected route
// Add other protected routes similarly

// Public routes (if any)
// app.use("/api/public", publicRoutes); 

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));