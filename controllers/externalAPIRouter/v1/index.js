const express = require("express");
const v1 = new express.Router();
const events = require("./events");
const buildings = require("./buildings");

v1.use("/events", events);
v1.use("/buildings", buildings);

module.exports = v1;
