const express = require("express");
const controller = require("../controllers/distributerController");
const router = express.Router();
router.use(express.urlencoded({
    extended: true
}));

router.get("/distributer", controller.listDonations);
router.delete('/donations/:id', controller.deleteDonation);

module.exports = router;