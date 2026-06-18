const Contact =
require("../models/Contact");

const sendMessage = async (req,res) => {
  try {
    const {
      userId,
      name,
      email,
      message
    } = req.body;

    const contact =
      await Contact.create({
        userId,
        name,
        email,
        message
      });

    res.status(201).json(contact);

  } catch (error) {
    res.status(500).json({
      message:error.message
    });
  }
};

module.exports = {
  sendMessage
};