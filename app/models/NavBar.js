const mongoose = require("mongoose");
const NavBarMenuSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "link",
  },
  text: {
    type: String,
    required: true,
  },
  link: String,
  backgroundColor: String,
  color: String,
  externalLink: Boolean,
});
const NavBarLogoSchema = new mongoose.Schema({
  src: String,
  height: {
    type: String,
    default: "40",
  },
  width: {
    type: String,
    default: "40",
  },
});
const NavBarSchema = new mongoose.Schema({
  fixed: {
    type: Boolean,
    default: true,
  },
  isShadow: {
    type: Boolean,
    default: true,
  },
  height: {
    type: String,
    default: "62",
  },
  borderStyle: {
    type: String,
    default: "solid",
  },
  alignMenu: {
    type: String,
    default: "center",
  },
  logo: {
    type: NavBarLogoSchema,
    default: {},
  },
  menu: [NavBarMenuSchema],
  endMenu: [NavBarMenuSchema],
});

module.exports = { NavBarSchema, NavBarMenuSchema, NavBarLogoSchema };
