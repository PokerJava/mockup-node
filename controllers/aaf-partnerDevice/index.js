const express = require("express");
const serverRouter = new express.Router();

serverRouter
  .post("/:idType/:idValue.json ", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          resultCode: "20000",
          developerMessage: "Success"
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
  })
  .get("/:idType/:idValue.json ", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          resultCode: "20000",
          developerMessage: "Success",
          publicId: "66123456789",
          uuid: "oekfirj94kr040rkeoj303jd0",
          devicelist: [
            {
              deviceid: "appleTV|XXXX|YYYY|ZZZZ",
              deviceid: "appleTV|XXXX|YYYY|ZZZZ"
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
