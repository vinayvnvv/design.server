const mongoose = require("mongoose");
const { NavBarSchema } = require("./NavBar");
const PagesSchema = require("./Pages");

const ThemeSchema = new mongoose.Schema({
  primary: String,
});

const projectSchema = new mongoose.Schema({
  user: String,
  title: {
    type: String,
    required: true,
  },
  theme: ThemeSchema,
  navbar: {
    type: NavBarSchema,
    required: true,
    default: {},
  },
  pages: {
    type: [PagesSchema],
    default: [{ name: "Home", path: "/" }],
  },
});

module.exports = mongoose.model("Project", projectSchema);
