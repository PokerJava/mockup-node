const express = require("express");
const serverRouter = new express.Router();

serverRouter
    .post("/", async (req, res, next) => {
        resHeaders = { "Content-Type": "application/json", "network-user": 'user1' }
        res.set(resHeaders);
        return res.status(200).send(require('../update_concent/update_concent.json'));
    })
module.exports = serverRouter;
