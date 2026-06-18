const mongoose = require("mongoose");

const restaurantBookingSchema =
  new mongoose.Schema(
    {

        type: {
  type: String,
  default: "restaurant"
},
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      restaurantName: String,
      tableType: String,
      guests: Number,
      checkIn: String,
      time: String,
      price: String,
      status: {
        type: String,
        default: "Confirmed"
      }
    },
    { timestamps: true }
  );

module.exports =
  mongoose.model(
    "RestaurantBooking",
    restaurantBookingSchema
  );