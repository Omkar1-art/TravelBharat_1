const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema(
  {
    type: {
  type: String,
  default: "hotel"
},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    hotelName: String,
    location: String,
    roomType: String,
    guests: Number,
    nights: Number,
    checkIn: String,
    checkOut: String,
    price: String,
    breakfast: String,
    status: {
      type: String,
      default: "Confirmed"
    }
  },
  { timestamps: true }
);

module.exports =
  mongoose.model("HotelBooking", hotelBookingSchema);