const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("Contact", contactSchema);