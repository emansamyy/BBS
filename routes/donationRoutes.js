const express = require("express");
const orouter = express.Router();
const { createDonation } = require("../controllers/Managedonation");
orouter.post("/addDonation", createDonation);

module.export = orouter;
