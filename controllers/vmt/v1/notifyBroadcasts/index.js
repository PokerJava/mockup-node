const express = require("express");
const notifyRouter = new express.Router();
const mongoose = require("mongoose");
const NotifyBroadcasts = mongoose.model("NotifyBroadcasts");
const { resultCode } = require("../../../../utils");
const randomstring = require("randomstring");

notifyRouter
  .get("/view", async (req, res, next) => {
    try {
      let query = req.query;
      let limit = query.limit ? parseInt(query.limit) : 10;
      let page =
        query.page && query.page != 0 ? (parseInt(query.page) - 1) * limit : 0;
      let notifyData = await NotifyBroadcasts.find()
        .limit(limit)
        .skip(page)
        .sort(query.orderby)
        .select(query.fields);
      let rowCount = await NotifyBroadcasts.countDocuments();
      buildMessage = {
        ...resultCode(20000),
        resultData: notifyData,
        rowCount: rowCount
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .get("/:msgId", async (req, res, next) => {
    try {
      let params = req.params;
      let notifyData = await NotifyBroadcasts.find({
        msgId: params.msgId
      });
      buildMessage = { ...resultCode(20000), resultData: notifyData };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .post("/", async (req, res, next) => {
    let body = {
      ...req.body,
      msgId: `TargetVMT-${randomstring.generate()}`
    };
    let buildMessage = {};
    delete body.dateCreated;
    try {
      let notifyData = await NotifyBroadcasts.create(body);
      buildMessage = {
        ...resultCode(20000),
        resultData: [{ msgId: notifyData["msgId"] }]
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .put("/:msgId", async (req, res, next) => {
    let body = req.body;
    let params = req.params;
    try {
      let notifyData = await Users.findOneAndUpdate(
        { msgId: params.msgId },
        body,
        {
          new: true
        }
      );
      buildMessage = { ...resultCode(20000) };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .delete("/:msgId", async (req, res, next) => {
    let params = req.params;
    try {
      await Users.findOneAndRemove({
        msgId: params.msgId
      });
      buildMessage = { ...resultCode(20000) };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  });

module.exports = notifyRouter;
