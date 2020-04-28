const express = require("express")
const v1 = new express.Router()
const facerecog = require("./facerecog")
const retrieve = require("./retrieve")
const update_concent = require("./update_concent")


v1.use("/facerecog", facerecog);
v1.use("/retrieve-mobileid-and-update-consent-log", retrieve);
v1.use("/update-verification-result", update_concent);

module.exports = v1;
