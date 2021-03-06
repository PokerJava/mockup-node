const express = require("express");
const profileRouter = new express.Router();

profileRouter
  .post("/tvprovider", async (req, res, next) => {
    let resp;
    if (req.body["user_token"]) {
      resp = {
        profile_uuid: "88fc4e378fea4021a94b2d7268fbf767",
        devices: {
          [req.body.devices[0]]: "SUCCESS"
        }
      };
    } else {
      //postfetch
      resp = {
        devices: {
          [req.body.devices[0]]: {
            response_status: "SUCCESS",
            model: "AppleTV",
            description: "Apple TV",
            color: "BLACK",
            device_assigned_by: "idetnity_team@tvprovider.com",
            device_assigned_date: "2018-01-01T14:30:00Z",
            profile_uuid: "88fc4e378fea4021a94b2d7268fbf767",
            profile_assign_time: "2018-01-01T00:00:00Z",
            profile_push_time: "2018-02-01T00:00:00Z"
          },
          B7CJ500QF1MA: {
            response_status: "NOT_FOUND"
          },
          CB7CJ500QFM2: {
            response_status: "NOT_FOUND"
          },
          CB7CJ500QFM3: {
            response_status: "NOT_FOUND"
          }
        }
      };
    }
    return res.json(resp);
  })
  .get("/tvprovider", async (req, res, next) => {
    let resp = {
        devices:{
           C8TJ500QF1MN:{
              response_status:"SUCCESS",
              model:"AppleTV",
              description:"Apple TV",
              color:"BLACK",
              device_assigned_by:"idetnity_team@tvprovider.com",
              device_assigned_date:"2018-01-01T14:30:00Z",
              profile_uuid:"88fc4e378fea4021a94b2d7268fbf767",
              profile_assign_time:"2018-01-01T00:00:00Z",
              profile_push_time:"2018-02-01T00:00:00Z"
           },
           B7CJ500QF1MA:{
              "response_status":"NOT_FOUND"
           }
        }
     

    };
    return res.json(resp);
  })
  .put("/devices", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          profile_uuid: "88fc4e378fea4021a94b2d7268fbf767",
          devices: {
            [req.body.devices[0]]: "SUCCESS"
          }
        }
      : {
          devices: {
            C8TJ500QF1MN: "NOT_ACCESSIBLE"
          }
        };
    return res.json(resp);
  })
  .delete("/devices", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          devices: {
            // C8TJ500QF1MN1: "",
            // B7CJ500QF1MA: "",
            // CB7CJ500QFM2: "",
            // C8TJ500QF2SW: ""

            // '': "",
            // B7CJ500QF1MA: "NOT_ACCESSIBLE",
            // CB7CJ500QFM2: "SUCCESS",
            // '': "FAIL"

            C8TJ500QF1MN: "SUCCESS",
            B7CJ500QF1MA: "NOT_ACCESSIBLE",
            CB7CJ500QFM2: "FAILED",
            CB7CJ500QFM3: "FAILED"
            
            
          // //   // "C8TJ500QF1MN": "SUCCESS",
          // //   // "2": "NOT_ACCESSIBLE",
          //   // "A": "SUCCESS",
          //   // "A": "SUCCESS"
          }
          // "devices":["C8TJ500QF1MN","C8TJ500QF2MN","C8TJ500QF3MN"]
        }
      : {
          devices: {
            C8TJ500QF1MN: "NOT_ACCESSIBLE"
          }
        };
    return res.json(resp);
  });
 
//   // res.set({
//   //   "Content-Type":"application/json"
//   // })
//   // return res.send('{"devices"{"SUCCESS","NOT_ACCESSIBLE","SUCCESS"}}');

// })

module.exports = profileRouter;
