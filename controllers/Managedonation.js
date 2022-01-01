const e = require("express");
const donation = require("../models/db");
const Request = require("../models/collectors");

const sendDonation = (req, res) => {
  res.render("donate");
};
function addform(req, res) {
  console.log(req.body);
  const request = new Request.Requests({
    formID: 1,
    name: req.body.fname,
    SSID: req.body.SSIDx,
    age: req.body.age,
    bloodType: req.body.bloodtype,
    emailAddress: req.body.email,
    weight: req.body.weightx,
    phoneNumber: req.body.pnumber,
    gender: req.body.gender,
  });

  request
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  addform,
  sendDonation,
};
