const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const routeRoutes = require("./routes/routeRoutes");
const landmarkRoutes = require("./routes/landmarkRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// app.use(cors());
// app.use(express.json());
app.use((req, res, next) => {
    console.log("Content-Type:", req.headers["content-type"]);
    console.log("Request Body:", req.body);
    next();
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 PathFinder Backend is Running!");
});
app.use("/api/routes", routeRoutes);
app.use("/api/landmarks", landmarkRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});