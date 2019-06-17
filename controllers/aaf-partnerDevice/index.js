const express = require("express");
const serverRouter = new express.Router();

serverRouter
  .post("/:idType/:idValue.json", async (req, res, next) => {
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
  .get("/:idType/:idValue.json", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          resultCode: "20000",
          developerMessage: "Success",
          publicId: ["66123456789"],
          uuid: ["oekfirj94kr040rkeoj303jd0", "oekfirj94kr040rkeo1239"],
          devicelist: [
            {
              deviceId: "C8TJ500QF1MN"
            },
            {
              deviceId: "appleTV|XXXX|YYYY|ZZZZ"
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
    return res.status(!req.query["notFound"] ? 200 : 401).json(resp);
  })
  .delete("/:idType/:idValue.json", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          resultCode: "20000",
          developerMessage: "Success"
        }
      : {
          resultCode: "40401",
          developerMessage: "DataNotFound",
          errorMessageStack: [
            {
              node: "SDF",
              resultCode: "40401",
              developerMessage: "Notfoundxxx",
              moreInfo: "tobedefine"
            }
          ]
        };
    return res.json(resp);
  });

module.exports = serverRouter;
