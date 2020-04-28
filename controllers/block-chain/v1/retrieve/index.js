const express = require("express");
const serverRouter = new express.Router();

serverRouter
    .post("/", async (req, res, next) => {
        resHeaders = { "Content-Type": "application/json", "network-user": 'user1' }
        res.set(resHeaders);
        return res.status(200).send(require('../retrieve/retrieve_mnid.json'));
    })
module.exports = serverRouter;
