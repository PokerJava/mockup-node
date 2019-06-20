const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/:idType/:idValue/:uid.json", async (req, res, next) => {
  let resp =  {
        resultCode: "20100",
        developerMessage: "Success",
        privateId:
          " xeROtl/KAf22f07jHLiOGRL8Yb1BRPlDRbhb/1CBMTb/uh39BfCGj+jG5ZuNs4DbQTLYxWNqIVionEgF0xjfJWFYu8iVWYmQS0Lyy4hRweY=",
        listOfService: [
          {
            serviceName: "EASYAPP"
          },
          {
            serviceName: "MYAIS"
          }
        ]
      }
  return res.json(resp);
});

module.exports = serverRouter;
