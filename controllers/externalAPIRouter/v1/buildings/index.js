const express = require("express");
const buildingRouter = new express.Router();
const mongoose = require("mongoose");
const Events = mongoose.model("Events");
const { resultCode } = require("../../../../utils");
const randomstring = require("randomstring");

buildingRouter
  .get("/:building_id/events", async (req, res, next) => {
    try {
      let params = req.params;
      let data = await Events.find({ building_id: params.building_id });
      buildMessage = { ...resultCode(20000), events: data };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .get("/:building_id/floors/:floor_id/events", async (req, res, next) => {
    try {
      let params = req.params;
      let data = await Events.find({
        building_id: params.building_id,
        "position.floor_id": params.floor_id
      });
      buildMessage = { ...resultCode(20000), events: data };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .get("/:building_id/events/:event_id/events", async (req, res, next) => {
    try {
      let params = req.params;
      let data = await Events.find({
        building_id: params.building_id,
        id: params.event_id
      });
      buildMessage = { ...resultCode(20000), events: data };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  });

module.exports = buildingRouter;
