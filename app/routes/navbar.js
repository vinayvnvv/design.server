const express = require("express");
const router = express.Router();
const navbar = require("./../controls/navbar");
const Response = require("./../services/response");

router.post("/:id", (req, res) => {
  const { userId, body, params } = req;
  navbar.addMenuItem(userId, params.id, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.patch("/:id", (req, res) => {
  const { userId, body, params } = req;
  navbar.editNav(userId, params.id, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.patch("/:id/:menuId", (req, res) => {
  const { userId, body, params } = req;
  navbar.editMenuItem(userId, params.id, params.menuId, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.delete("/:id/:menuId", (req, res) => {
  const { userId, params, body } = req;
  navbar.deleteMenuItem(userId, params.id, params.menuId, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

module.exports = router;
