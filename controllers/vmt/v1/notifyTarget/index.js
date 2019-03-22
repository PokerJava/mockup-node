const express = require("express");
const notifyRouter = new express.Router();
const mongoose = require("mongoose");
const NotifyTargets = mongoose.model("NotifyTargets");
const { resultCode } = require("../../../../utils");
const randomstring = require("randomstring");

notifyRouter
  .get("/view", async (req, res, next) => {
    try {
      let query = req.query;
      let limit = query.limit ? parseInt(query.limit) : 10;
      let page =
        query.page && query.page != 0 ? (parseInt(query.page) - 1) * limit : 0;
      let notifyData = await NotifyTargets.find()
        .limit(limit)
        .skip(page)
        .sort(query.orderby)
        .select(query.fields ? query.fields.replace(/,/g, " ") : "");
      let rowCount = await NotifyTargets.countDocuments();
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
  .get("/:targetId", async (req, res, next) => {
    try {
      let params = req.params;
      let notifyData = await NotifyTargets.find({ targetId: params.targetId });
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
      targetId: `TargetVMT-${randomstring.generate()}`
    };
    let buildMessage = {};
    delete body.dateCreated;
    try {
      let notifyData = await NotifyTargets.create(body);
      buildMessage = {
        ...resultCode(20000),
        resultData: [{ targetId: notifyData["targetId"] }]
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .put("/:targetId", async (req, res, next) => {
    let body = req.body;
    let params = req.params;
    try {
      let notifyData = await NotifyTargets.findOneAndUpdate(
        { targetId: params.targetId },
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
  .delete("/:targetId", async (req, res, next) => {
    let params = req.params;
    try {
      await NotifyTargets.findOneAndRemove({
        targetId: params.targetId
      });
      buildMessage = { ...resultCode(20000) };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  });

module.exports = notifyRouter;
