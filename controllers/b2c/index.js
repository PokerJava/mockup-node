const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/", async (req, res, next) => {
  res.set("x-app", "appName=netflixstb; appVersion=1.0.0;");
  res.set("x-session-id", "weww62CCxLcPDLhncIXn");
  let resp = !req.query["notFound"]
    ? {
        resultCode: "20100",
        developerMessage: "Success",
        privateId: "123fewf34"
      }
    : {
        resultCode: "40401",
        developerMessage: "Data Not Found"
      };
  res.set({
    "x-session-id": "123456789",
    "x-app": "appName=cookieRun;appVersion=1.0.1",
    "x-partner-specific-private-id": "partner specific-private"
  });
  return res.status(201).json(resp);
});

module.exports = serverRouter;
