// required
require("dotenv").config();
// libs
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// local
const routes = require("./routes");
const authMiddleware = require("./middlewares/auth");
// defines
const app = express();
const PORT = 5000;
const MONGO_URL = process.env.MONGO_URL;

const main = async () => {
  // db
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log(`---> db connected -> ${MONGO_URL}`))
    .catch((err) => console.log(err));
  // express app
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/api/*", authMiddleware);
  app.use("/api", routes);
  app.get("/", (__, res) => {
    console.log(res.json("__design.server__"));
  });
  app.listen(PORT, () => {
    console.log(`---> app listening on port ${PORT}`);
  });
};

main();
