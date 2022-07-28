const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});
app.get("/api/contact", (req, res) => {
  rollbar.error("Someone clicked the stupid button");
  res.status(400).send(error);
});
// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
app.use(express.static(path.join(__dirname, "/../public")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/landing.html"));
});
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log("Listening of 4005");
});
