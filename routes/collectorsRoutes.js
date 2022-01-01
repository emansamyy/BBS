const express = require("express");
const model = require("../models/collectors");
const collectorsController = require("../controllers/collectorsController");
const router = express.Router();
router.use(express.urlencoded({
    extended: true
}));

router.post("/add-donation", collectorsController.addDonation);
router.get("/collectors", collectorsController.listRequests);

module.exports = router;