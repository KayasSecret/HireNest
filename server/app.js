const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors"); // ✅ CORS import kiya

const app = express();
const PORT = 8080;

// ✅ CORS Middleware Enable kiya
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/Hire-Nest";

// MongoDB Connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware to Serve React Build Files
const reactBuildPath = path.join(__dirname, "../client/vite-project/dist");
console.log("Serving React from:", reactBuildPath);
app.use(express.static(reactBuildPath));

// ✅ API Route for Fetching Data
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// React App Routing (For SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Server is working fine!");
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
