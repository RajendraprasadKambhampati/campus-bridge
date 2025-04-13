import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const router = express.Router();

// Temporary mock user database - REPLACE with your real User model later
const users = [
  {
    id: "101",
    email: "admin@campusbridge.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin"
  }
];

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1. Find user
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: "User not found" });

  // 2. Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ error: "Invalid password" });

  // 3. Create JWT
  const token = jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Registration Route (Example - customize as needed)
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // 1. Check if user exists
  if (users.some(u => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Create new user (in real app, save to MongoDB)
  const newUser = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    role: "student" // Default role
  };
  users.push(newUser);

  res.status(201).json({ message: "User created" });
});

export default router;