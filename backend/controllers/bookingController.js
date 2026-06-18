const HotelBooking =
require("../models/HotelBooking");

const createBooking = async (req,res) => {
  try {
    const booking =
      await HotelBooking.create(req.body);

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

const getUserBookings =
async (req,res) => {
  try {
    const bookings =
      await HotelBooking.find({
        userId:req.params.userId
      });

    res.status(200).json(bookings);

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

const deleteBooking =
async (req,res) => {
  try {
    console.log(
      "Deleting Hotel:",
      req.params.id
    );

    await HotelBooking.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:"Booking deleted"
    });

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  deleteBooking
};