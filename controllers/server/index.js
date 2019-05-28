const express = require("express");
const serverRouter = new express.Router();

serverRouter.post("/devices", async (req, res, next) => {
  let resp = {
    devices: [
      {
        serial_number: "C8TJ500QF1MN",
        model: "AppleTV",
        description: "Apple TV",
        color: "BLACK",
        profile_status: "empty",
        device_assigned_date: "2018-04-05T14:30:00Z",
        device_assigned_by: "idetnity_team@tvprovider.com"
      },
      {}
    ],
    fetched_until: "2018-05-09T02:24:28Z",
    cursor:
      "MDowOjE1Mjg5NDg4Mzg5MTA6MTUyODk0ODgzODkxMDp0cnVlOjE1Mjg5NDg4Mzg5MTA",
    more_to_follow: "false"
  };
  return res.json(resp);
});

module.exports = serverRouter;
