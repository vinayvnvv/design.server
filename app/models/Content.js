const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const ContentSchema = new mongoose.Schema({
  project: {
    type: ObjectId,
    required: true,
  },
  page: {
    type: ObjectId,
    required: true,
  },
  content: {
    type: Object,
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("ContentSchema", ContentSchema);
