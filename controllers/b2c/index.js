const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/", async (req, res, next) => {
/*  res.set({
    "x-session-id": "123456789",
    "x-app": "appName=cookieRun;appVersion=1.0.1",
    "x-partner-specific-private-id": "partner specific-private"
  });
*/  res.set({
    "X-Partner-Specific-Private-Id": "TwrIoVUgj6e2hbSNXNEAXtj09LIGULlrX8iOkD0VCDH=",
    "X-App": "appName=netflixstb; appVersion=1.0.0;",	
    "X-Session-Id": "weww62CCxLcPDLhncIXn"
  
  });
/*  let resp = {
        resultCode: "20100",
        developerMessage: "Success",
       privateId: "123fewf34"
      }
*/      let resp = {
        resultCode: "50003",
        developerMessage: "connection_timeout",
        privateId: "TwrIoVUgj6e2hbSNXNEAXtj09LIGULlrX8iOkD0VCDH="
      }

  return res.status(201).json(resp);
});

module.exports = serverRouter;
