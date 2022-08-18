const mongoose = require("mongoose");
const { Project, NavBarMenuSchema } = require("./../models");
const navBarMenu = mongoose.model("NavBarMenuSchema", NavBarMenuSchema);
class NavBarClass {
  addMenuItem(userId, id, data, callback) {
    const doc = new navBarMenu(data);
    doc
      .validate()
      .then(() => {
        console.log(userId, id, data);
        Project.findOneAndUpdate(
          { user: userId, _id: id },
          { $push: { [`navbar.${data.endMenu ? "endMenu" : "menu"}`]: data } },
          { new: true }
        )
          .then((res) => {
            callback(false, res);
          })
          .catch((err) => {
            console.log(err);
            callback({ error: err, status: 402 });
          });
      })
      .catch((err) => {
        console.log(err);
        callback({ error: err, status: 402 });
      });
  }
  editMenuItem(userId, id, menuId, data, callback) {
    var updateObj = {};
    Object.keys(data).forEach((key) => {
      updateObj[`navbar.${data.endMenu ? "endMenu" : "menu"}.$[outer].${key}`] =
        data[key];
    });
    Project.findOneAndUpdate(
      { user: userId, _id: id },
      { $set: updateObj },
      { arrayFilters: [{ "outer._id": menuId }], new: true }
    )
      .then((res) => {
        callback(false, res);
      })
      .catch((err) => {
        callback({ error: err, status: 402 });
      });
  }
  deleteMenuItem(userId, id, menuId, data, callback) {
    Project.findByIdAndUpdate(
      { user: userId, _id: id },
      {
        $pull: {
          [`navbar.${data.endMenu ? "endMenu" : "menu"}`]: { _id: menuId },
        },
      },
      { new: true }
    )
      .then((res) => {
        callback(false, res);
      })
      .catch((err) => {
        console.log(err);
        callback({ error: err, status: 402 });
      });
  }
  editNavbar() {}
}

module.exports = new NavBarClass();
