const express = require("express");
const v1 = new express.Router();
const notifyTarget = require("./notifyTarget");
const notifyBroadcasts = require("./notifyBroadcasts");

v1.use("/notifyTarget", notifyTarget);
v1.use("/notifyMessageBroadcast", notifyBroadcasts);

module.exports = v1;
