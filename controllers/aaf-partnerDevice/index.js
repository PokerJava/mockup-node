const express = require("express");
const serverRouter = new express.Router();

serverRouter
  .post("/:idType/:idValue.json", async (req, res, next) => {
    let resp = {
      resultCode: "20000",
      developerMessage: "Success"
    }
    return res.status(resp.resultCode == '20000' ? 200 : 403).json(resp);
    // return res.json(resp);
  })
  .get("/:idType/:idValue.json", async (req, res, next) => {
    let resp
    if (req.params.idValue == 'QjdDSjUwMFFGMU1B') {
      resp = {
        "resultCode": "40401",
        "developerMessage": "Data Not Found",
        "errorMessageStack": [{
          "node": "SDF",
          "resultCode": "40401",
          "developerMessage": "Not found xxx",
          "moreInfo": "to be define"
        }]
      }
      
      // resp = {
      //   "resultCode": "20000",
      //   "developerMessage": "Success",
      //   "partnerDevice": [{
      //     "deviceId": "QjdDSjUwMFFGMU1B", /* QzhUSjUwMFFGMU1O */
      //     "uuid": "88fc4e378fea4021a94b2d7268fbf767",
      //     "publicId": "668181633361", /* "66123456789" */
      //     "model": "appleTV" /* appleTV1 */
      //   },
      //   ]
      // }

      //recovery POST CASE 1
      // resp = {
      //   "resultCode": "20000",
      //   "developerMessage": "Success",
      //   "partnerDevice": [{
      //     "deviceId": "QjdDSjUwMFFGMU1B", /* QzhUSjUwMFFGMU1O */
      //     "uuid": "88fc4e378fea4021a94b2d7268fbf767",
      //     "publicId": "66818163336", /* "66123456789" */
      //     "model": "appleTV" /* appleTV1 */
      //   },
      //   ]
      // }

      return res.status(resp.resultCode == '20000' ? 200 : 404).json(resp);
    }

    else {
      resp = {

        "resultCode": "20000",
        "developerMessage": "Success",
        "partnerDevice": [
          {
            "deviceId": "QzhUSjUwMFFGMU1O",
            "uuid": "88fc4e378fea4021a94b2d7268fbf767",
            "publicId": "66123456799",
            "model": "appleTV"
          },
          {
            "deviceId": "QjdDSjUwMFFGMU1B",
            "uuid": "oekfirj94kr040rkeoj303jd1",
            "publicId": "66123456799",
            "model": "appleTV"
          },
          {
            "deviceId": "Q0I3Q0o1MDBRRk0y",
            "uuid": "oekfirj94kr040rkeoj303jd1",
            "publicId": "66123456799",
            "model": "appleTV"
          },
          {
            "deviceId": "Q0I3Q0o1MDBRRk0z",
            "uuid": "oekfirj94kr040rkeoj303jd1",
            "publicId": "66123456799",
            "model": "appleTV"
          }
        ]
      }

      //        resp =  {  
      //     resultCode: "40401",
      //     developerMessage: "Data Not Found",
      //     errorMessageStack: [  
      //        {  
      //           node: "SDF",
      //           resultCode: "40401",
      //           developerMessage: "Not found xxx",
      //           moreInfo: "to be define"
      //        }
      //     ]
      //  }

      //  res.status(500)
      //  let resp = {
      //       resultCode: "50000",
      //       developerMessage: "system_error"
      //  }

      //  let resp =  {
      //   resultCode: "50003",
      //   developerMessage: "Connection Error",
      // }
      return res.status(resp.resultCode == '20000' ? 200 : 404).json(resp);
    }







    // return res.status(!req.query["notFound"] ? 200 : 401).json(resp);
  })
  .delete("/:idType/:idValue.json", async (req, res, next) => {
    let params = req.params
    let resp = {}


    // if(params.idValue == '66123456789') {
    //   res.status(200)
    //   resp = {
    //     resultCode: "20000",
    //     developerMessage: "success"
    //   }
    // }
    // 01.1 SUCCESS "20000" 
    if (params.idValue == 'QzhUSjUwMFFGMU1O'/* C8TJ500QF1MN */) {
      // res.status(200)
      // resp = {
      //   "resultCode": "20000",
      //   "developerMessage": "Success"
      // }

      // res.status(404)
      // resp = {
      //   "resultCode": "40401",
      //   "developerMessage": "Data Not Found",
      //   "errorMessageStack": [{
      //     "node": "SDF",
      //     "resultCode": "40401",
      //     "developerMessage": "Not found xxx",
      //     "moreInfo": "to be define"
      //   }]
      // }
      
      // 01.3 SYSTEM ERROR "50000"
       res.status(500)
       resp = {
          // resultCode: "50000",
          developerMessage: "system_error"
          }
      // }
    }

    // // 01.2 DATA NOT FOUND "40401"
    else if (params.idValue == 'QjdDSjUwMFFGMU1B' /* B7CJ500QF1MA */) {
   
      //  01.2 SUCCESS "20000"
      // resp = {
      //   "resultCode" :"20000",
      //   "developerMessage" :"Success",
      //   }

      //  res.status(404)
      //  resp = {
      //     "resultCode":"40401",
      //     "developerMessage":"Data Not Found",
      //     "errorMessageStack":[ {
      //         "node":"SDF",
      //         "resultCode":"40401",
      //         "developerMessage":"Not found xxx",
      //         "moreInfo":"to be define"
      //      }]
      // }
      // 01.3 SYSTEM ERROR "50000"
      res.status(500)
      resp = {
        resultCode: "50000",
        developerMessage: "system_error"
      }
    }
    else {
      resp = {
        resultCode: "20000",
        developerMessage: "Success"
      }
    }
    return res.json(resp);
  });

module.exports = serverRouter;
