const RestaurantBooking =
require("../models/RestaurantBooking");

const createRestaurantBooking =
async (req,res) => {
  try {
    const booking =
      await RestaurantBooking.create(req.body);

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

const getUserRestaurantBookings =
async (req,res) => {
  try {
    const bookings =
      await RestaurantBooking.find({
        userId:req.params.userId
      });

    res.status(200).json(bookings);

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

const deleteRestaurantBooking =
async (req,res) => {
  try {
    console.log(
      "Deleting Restaurant:",
      req.params.id
    );

    await RestaurantBooking.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:"Restaurant booking deleted"
    });

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

module.exports = {
  createRestaurantBooking,
  getUserRestaurantBookings,
  deleteRestaurantBooking
};