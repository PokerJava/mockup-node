const express = require("express");
const profileRouter = new express.Router();

profileRouter
  .post("/tvprovider", async (req, res, next) => {
    let resp = req.body["user_token"]
      ? {
          profile_uuid: "88fc4e378fea4021a94b2d7268fbf767",
          devices: {
            C8TJ500QF1MN: "SUCCESS"
          }
        }
      : {
          devices: {
            C8TJ500QF1MN: {
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
            }
          }
        };
    return res.json(resp);
  })
  .get("/tvprovider", async (req, res, next) => {
    let resp = {
      profile_name: "Apple STB",
      profile_uuid: "485E1C8662E263DF11BF3F76508D82D8",
      user_token: "1+D1K,woiBA6y3fFVr+r7E[G)SiyR(Qrt*vOIbnXsbayahdQ"
    };
    return res.json(resp);
  })
  .put("/devices", async (req, res, next) => {
    let resp = !req.query["notFound"]
      ? {
          profile_uuid: "88fc4e378fea4021a94b2d7268fbf767",
          devices: {
            C8TJ500QF1MN: "SUCCESS"
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
            C8TJ500QF1MN: "SUCCESS",
            B7CJ500QF1MA: "NOT_ACCESSIBLE"
          }
        }
      : {
          devices: {
            C8TJ500QF1MN: "NOT_ACCESSIBLE"
          }
        };
    return res.json(resp);
  });

module.exports = profileRouter;
