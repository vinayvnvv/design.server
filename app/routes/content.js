const express = require("express");
const router = express.Router();
const navbar = require("./../controls/content");
const Response = require("./../services/response");

router.get("/:project/:page", (req, res) => {
  const { params } = req;
  navbar.getContent(params.project, params.page, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.patch("/:id", (req, res) => {
  const { body, params } = req;
  navbar.editContent(params.id, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

module.exports = router;
