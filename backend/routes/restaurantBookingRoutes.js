const express = require("express");

const {
  createRestaurantBooking,
  getUserRestaurantBookings,
  deleteRestaurantBooking
} = require("../controllers/restaurantBookingController");

const router = express.Router();

router.post(
  "/create",
  createRestaurantBooking
);

router.get(
  "/user/:userId",
  getUserRestaurantBookings
);

router.delete(
  "/delete/:id",
  deleteRestaurantBooking
);

module.exports = router;