//omar187452
const path = require("path");
const donation  = require("../models/db");

const createDonation = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "cannot be empty" });
  }
  var donationx = new donation({
    UserFullName: req.body.Fname,
    age: req.body.age,
    nationalId: req.body.nationalId,
    weight: req.body.weight,
    date: req.body.date,
    BloodType: req.body.bloodTypye,
    Gender: req.body.Gender,
  });

  donationx
    .save(donationx)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error.",
      });
    });
};

module.exports = {
  createDonation:createDonation
};
