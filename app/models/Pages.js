const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  _id: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  path: String,
  open_in_new: Boolean,
});

module.exports = PagesSchema;
