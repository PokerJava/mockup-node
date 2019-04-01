const express = require("express");
const notifyRouter = new express.Router();
const mongoose = require("mongoose");
const NotifyTargets = mongoose.model("NotifyTargets");
const { resultCode } = require("../../utils");
const randomstring = require("randomstring");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/shop");
  },
  filename: function(req, file, cb) {
    let fileSplit = file.originalname.split(",");
    cb(
      null,
      file.fieldname + "-" + Date.now() + "." + fileSplit[fileSplit.length - 1]
    );
  }
});
const upload = multer({ storage: storage });

notifyRouter
  .post("/", upload.single("image"), async (req, res, next) => {
    try {
      let buildMessage = {
        imageUrl: `206.189.41.105:9001/shop/${req.file.filename}`,
        name: `${req.file.filename}`,
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
        imageUrl: "206.189.41.105:9001/shop/850105679427509.jpg",
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
