const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/:idType/:idValue/:uid.json", async (req, res, next) => {
  let resp = !req.query["notFound"]
    ? {
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
    : {
        resultCode: "40401",
        developerMessage: "Data Not Found",
        errorMessageStack: [
          {
            node: "SDF",
            resultCode: "40401",
            developerMessage: "Not found xxx",
            moreInfo: "to be define"
          }
        ]
      };

  return res.json(resp);
});

module.exports = serverRouter;
