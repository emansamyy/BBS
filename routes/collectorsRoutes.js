const express = require("express");
const Requests = require("../models/collectors");
const collectorsController = require("../controllers/collectorsController");
const router = express.Router();

router.get("/add-request", (req, res) => {
    const request = new Requests({
        formID: 1,
        name: "Mohamed Ahmed",
        age: 25,
        bloodType: "A+",
        emailAddress: "mohamedahmed@gmail.com",
        weight: 67,
        phoneNumber: 1234588,
    });
    request
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
router.get("/collectors", collectorsController.listRequests);

module.exports = router;