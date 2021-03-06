const express = require("express");
const notifyRouter = new express.Router();
const mongoose = require("mongoose");
const NotifyPOIs = mongoose.model("NotifyPOIs");
const { resultCode } = require("../../../../utils");
const randomstring = require("randomstring");

notifyRouter
  .get("/", async (req, res, next) => {
    try {
      let query = req.query;
      let limit = query.limit ? parseInt(query.limit) : 10;
      let page =
        query.page && query.page != 0 ? (parseInt(query.page) - 1) * limit : 0;
      let notifyData = await NotifyPOIs.find()
        .limit(limit)
        .skip(page)
        .sort(query.orderby)
        .select(query.fields ? query.fields.replace(/,/g, " ") : "");
      let rowCount = await NotifyPOIs.countDocuments();
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
      let notifyData = await NotifyPOIs.find({ msgId: params.msgId });
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
      let notifyData = await NotifyPOIs.create(body);
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
      let notifyData = await NotifyPOIs.findOneAndUpdate(
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
      await NotifyPOIs.findOneAndRemove({
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
