const express = require("express");
const router = express.Router();
const pageRouter = require("./page");
const navBarRouter = require("./navbar");
const contentRouter = require("./content");
const Project = require("./../controls/project");
const Response = require("./../services/response");

router.get("/", (req, res) => {
  const { userId } = req;
  Project.getProjects(userId, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.get("/:id", (req, res) => {
  const { userId, params } = req;
  Project.getProject(userId, params.id, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.post("/", (req, res) => {
  const { userId, body } = req;
  Project.addProject(userId, body, (err, data) => {
    if (err) {
      Response.error(err, res);
    } else {
      Response.success(data, res);
    }
  });
});

router.use("/page", pageRouter);
router.use("/navbar", navBarRouter);
router.use("/content", contentRouter);

module.exports = router;
