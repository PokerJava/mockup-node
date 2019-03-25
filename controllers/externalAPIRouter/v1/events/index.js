const express = require("express");
const eventRouter = new express.Router();
const mongoose = require("mongoose");
const Events = mongoose.model("Events");
const { resultCode } = require("../../../../utils");
const randomstring = require("randomstring");

eventRouter
  // .get("/view", async (req, res, next) => {
  //   try {
  //     let query = req.query;
  //     let limit = query.limit ? parseInt(query.limit) : 10;
  //     let page =
  //       query.page && query.page != 0 ? (parseInt(query.page) - 1) * limit : 0;
  //     let notifyData = await Events.find()
  //       .limit(limit)
  //       .skip(page)
  //       .sort(query.orderby)
  //       .select(query.fields ? query.fields.replace(/,/g, " ") : "");
  //     let rowCount = await Events.countDocuments();
  //     buildMessage = {
  //       ...resultCode(20000),
  //       resultData: notifyData,
  //       rowCount: rowCount
  //     };
  //     return res.json(buildMessage);
  //   } catch (err) {
  //     buildMessage = { ...resultCode(50000), err: err };
  //     return res.json(buildMessage);
  //   }
  // })
  // .get("/:eventId", async (req, res, next) => {
  //   try {
  //     let params = req.params;
  //     let notifyData = await Events.find({ eventId: params.eventId });
  //     buildMessage = { ...resultCode(20000), resultData: notifyData };
  //     return res.json(buildMessage);
  //   } catch (err) {
  //     buildMessage = { ...resultCode(50000), err: err };
  //     return res.json(buildMessage);
  //   }
  // })
  .post("/", async (req, res, next) => {
    let body = {
      ...req.body,
      id: `${randomstring.generate()}`
    };
    let buildMessage = {};
    delete body.dateCreated;
    try {
      let data = await Events.create(body);
      buildMessage = {
        ...resultCode(20000),
        events: data
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .put("/:eventId", async (req, res, next) => {
    let body = req.body;
    let params = req.params;
    try {
      let data = await Events.findOneAndUpdate({ id: params.eventId }, body, {
        new: true
      });
      buildMessage = {
        ...resultCode(20000),
        events: data
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .delete("/:eventId", async (req, res, next) => {
    let params = req.params;
    try {
      await Events.findOneAndRemove({
        id: params.eventId
      });
      buildMessage = { ...resultCode(20000) };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  });

module.exports = eventRouter;
