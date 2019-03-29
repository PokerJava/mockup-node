const express = require("express");
const notifyRouter = new express.Router();
const mongoose = require("mongoose");
const NotifyTargets = mongoose.model("NotifyTargets");
const { resultCode } = require("../../utils");
const randomstring = require("randomstring");

notifyRouter
  //   .get("/", async (req, res, next) => {
  //     try {
  //       return res.json(buildMessage);
  //     } catch (err) {
  //       buildMessage = { ...resultCode(50000), err: err };
  //       return res.json(buildMessage);
  //     }
  //   })
  .post("/", async (req, res, next) => {
    try {
      let buildMessage = {
        imageUrl: "206.189.41.105:9001/shop/850105679427509.jpg",
        // imageUrl: "localhost:5555/shop/850105679427509.jpg",
        name: "850105679427509.jpg",
        size: 969465,
        thumbnails: "test1",
        thumbnails43: "test2",
        type: "image/jpeg"
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  })
  .put("/", async (req, res, next) => {
    try {
      let buildMessage = {
        imageUrl: "206.189.41.105:5000/shop/850105679427509.jpg",
        // imageUrl: "localhost:5555/shop/850105679427509.jpg",
        name: "850105679427509.jpg",
        size: 969465,
        thumbnails: "test1",
        thumbnails43: "test2",
        type: "image/jpeg"
      };
      return res.json(buildMessage);
    } catch (err) {
      buildMessage = { ...resultCode(50000), err: err };
      return res.json(buildMessage);
    }
  });

module.exports = notifyRouter;
