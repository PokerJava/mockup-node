const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/", async (req, res, next) => {
  let resp = !req.query["notFound"]
    ? {
        resultCode: "20000",
        developerMessage: "Success",
        privateId: "123fewf34"
      }
    : {
        resultCode: "40401",
        developerMessage: "Data Not Found"
      };

  return res.json(resp);
});

module.exports = serverRouter;
