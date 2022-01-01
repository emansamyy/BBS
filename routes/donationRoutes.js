const express = require("express");
const orouter = express.Router();

const controller = require("../controllers/Managedonation");

orouter.post("/add-form",controller.addform);
orouter.get("/donor", controller.sendDonation)

module.exports = orouter;
