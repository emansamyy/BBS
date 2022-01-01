const collectersModel = require("../models/collectors");

function listRequests(req, res) {
    collectersModel.Requests.find()
        .then((result) => {
            res.render("collectors/collectorsHome", {
                requests: result
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

function addDonation(req, res) {
    const donation = new collectersModel.Donations({
        bloodType: req.body.bloodType,
        donationDate: req.body.donationdate,
        collector: req.body.collector,
        quantity: req.body.quantity,
    });
    donation
        .save()
        .then((result) => {
            res.redirect('/collectors');
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    listRequests,
    addDonation,
};