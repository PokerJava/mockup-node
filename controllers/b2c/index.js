const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/", async (req, res, next) => {
  res.set("X-App", "appName=netflixstb; appVersion=1.0.0;");
  res.set("X-Session-Id", "weww62CCxLcPDLhncIXn");
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
  res.set({
    "X-Seesion-Id": "123456789",
    "X-App": "appName=cookieRun;appVersion=1.0.1",
    "X-Partner-Specific-Private-Id": "partner specific-private"
  });
  return res.json(resp);
});

module.exports = serverRouter;
