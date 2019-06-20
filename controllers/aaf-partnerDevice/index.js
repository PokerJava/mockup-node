const express = require("express");
const serverRouter = new express.Router();

serverRouter
  .post("/:idType/:idValue.json", async (req, res, next) => {
    let resp = {
          resultCode: "20000",
          developerMessage: "Success"
        }
    return res.json(resp);
  })
  .get("/:idType/:idValue.json", async (req, res, next) => {
   
    let resp =  {
       "resultCode":"20000",
       "developerMessage":"Success",
       "publicId":["66123456789"],
       "uuid":["oekfirj94kr040rkeoj303jd0"],
    "devicelist":[
       "QzhUSjUwMFFGMU1O",
       "QzhUSjUwMFFGMlNX"
    ]
  }
    /* let resp =  {
           resultCode: "20000",
           developerMessage: "Success",
           publicId: ["66818163336"],
           uuid: ["oekfirj94kr040rkeoj303jd0", "oekfirj94kr040rkeo1239"],
           devicelist:[
             "QzhUSjUwMFFGMU1O",
             "QzhUSjUwMFFGMlNX"
           ]
         }

    */
    /*
         let resp =  {
          resultCode: "50003",
          developerMessage: "Connection Error",
        }
     let resp =  {  
      resultCode: "40400",
      developerMessage: "Data Not Found",
      errorMessageStack: [  
         {  
            node: "SDF",
            resultCode: "40401",
            developerMessage: "Not found xxx",
            moreInfo: "to be define"
         }
      ]
   }*/
   
    return res.status(!req.query["notFound"] ? 200 : 401).json(resp);
  })
  .delete("/:idType/:idValue.json", async (req, res, next) => {
    let resp =  {
          resultCode: "20000",
          developerMessage: "Success"
        }
      
    return res.json(resp);
  });

module.exports = serverRouter;
