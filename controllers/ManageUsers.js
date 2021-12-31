<<<<<<< HEAD
// eman188849

const Path = require("path");
const users = require("../models/db");

const createUser = (req, res) => {
=======
const e = require("express");
const Path = require("path");
const users = require("../models/db");

const addUser = (req, res) => {
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
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
<<<<<<< HEAD
        message:
          err.message || "Some error occurred while creating the accoount.",
      });
    });
};

const updateUser = (req, res) => {
  const id = Number(req.params.UserID);
  const index = users.findIndex((user) => user.id === id);
  const updatedUser = {
    id: users[index].id,
    name: req.body.name,
  };

  users[index] = updatedUser;
  res.status(200).json("User updated");
};

const deleteUser = (req, res) => {
  const id = Number(req.params.UserID);
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  res.status(200).json("User deleted");
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
=======
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
  
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
};
