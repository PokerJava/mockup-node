const express = require("express");
const v1 = new express.Router();
const notifyTarget = require("./notifyTarget");

v1.use("/notifyTarget", notifyTarget);

module.exports = v1;
