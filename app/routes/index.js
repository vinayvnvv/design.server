const express = require("express");
const router = express.Router();
const projectRouter = require("./project");

router.use("/project", projectRouter);

module.exports = router;
