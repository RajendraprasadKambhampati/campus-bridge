import express from "express";
import {
  getCodeHint,
  codeReview,
  jobMatch,
  groupCodingRoom
} from "../controllers/aiController.js";

const router = express.Router();

console.log("Authenticated user:", req.user);
  
  res.json({ 
    message: "Protected AI route accessed",
    user: req.user 
  });

export default router;