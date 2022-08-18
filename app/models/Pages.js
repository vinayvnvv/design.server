const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  path: String,
  open_in_new: Boolean,
});

module.exports = PagesSchema;
