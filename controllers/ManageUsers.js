const e = require("express");
const Path = require("path");
const users = require("../models/db");

const addUser = (req, res) => {
  var user = new users({
    UserID: req.body.iidd,
    UserFirstName: req.body.unamm,
    Email: req.body.emaile,
    Role: req.body.Rolle,
  });

  user
    .save(user)
    .then((data) => {
      res.send("the user has been added to the database");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

const checkuser = (req, res) => {
  var user = users.findOne({
    Email: String(req.body.logemail),
  });

  user.select("Role").exec(function (err, user) {
    if (err) return handleError(err);
    if (user.Role == "admin") {
      res.sendFile("adminhome.html", {
        root: Path.join(__dirname, "../public"),
      });
    } else if (user.Role == "donor") {
      res.sendFile("donorhome.html", {
        root: Path.join(__dirname, "../public"),
      });
    } else if (user.Role == "collector") {
      res.sendFile("collectorhome.html", {
        root: Path.join(__dirname, "../public"),
      });
    } else if (user.Role == "distributer") {
      res.sendFile("distributerhome.html", {
        root: Path.join(__dirname, "../public"),
      });
    } else {
      console.log("user not found");
    }
  });
};
const signup = (req, res) => {
  var user = new users({
    UserID: req.body.iidd,
    UserFirstName: req.body.unamm,
    Email: req.body.emaile,
    Role: req.body.Rolle,
  });

  user
    .save(user)
    .then((data) => {
      res.send("the user has been added to the database");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
module.exports = {
  addUser,
  checkuser,
 signup
  
};
