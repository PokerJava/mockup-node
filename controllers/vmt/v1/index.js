const express = require("express");
const v1 = new express.Router();
const notifyTarget = require("./notifyTarget");
const notifyBroadcasts = require("./notifyBroadcasts");
const notifyPOI = require("./notifyPOI");

v1.use("/notifyTarget", notifyTarget);
v1.use("/notifyMessageBroadcast", notifyBroadcasts);
v1.use("/notifyMessagePOI", notifyPOI);

module.exports = v1;
