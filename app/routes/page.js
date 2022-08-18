const express = require("express");
const router = express.Router();
const page = require("./../controls/page");
const Response = require("./../services/response");

router.post("/:id", (req, res) => {
  const { userId, body, params } = req;
  page.addPage(userId, params.id, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.patch("/:id/:pageId", (req, res) => {
  const { userId, body, params } = req;
  page.editPage(userId, params.id, params.pageId, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.delete("/:id/:pageId", (req, res) => {
  const { userId, params } = req;
  page.deletePage(userId, params.id, params.pageId, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

module.exports = router;
