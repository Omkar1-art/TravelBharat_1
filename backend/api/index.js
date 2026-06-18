require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");

const authRoutes = require("../routes/authRoutes");
const contactRoutes = require("../routes/contactRoutes");
const bookingRoutes = require("../routes/bookingRoutes");
const restaurantBookingRoutes = require("../routes/restaurantBookingRoutes");

const app = express();

connectDB();

// CORS FIX
app.use(
  cors({
    origin: [
      "https://travelbharat-frontend-liard.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/restaurant-bookings", restaurantBookingRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("TravelBharat Backend Running...");
});

module.exports = app;