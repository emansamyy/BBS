const e = require("express");
const Path = require("path");
const users = require("../models/db");


const usersarr =[
  
 
  { UserID: 6, Role: "donor",UserFirstName: "Omar",UserSecondName: "Mahmoud", Email: "Omar7ooda@gmail.com", password: "1234",phoneNumber: 011203044, age: 65 , weight: 56 , BloodType: "A+" },
  { UserID: 7, Role: "donor",UserFirstName: "Ahmed",UserSecondName: "Zakria", Email: "AhmedZakareya@gmail.com", password: "1234",phoneNumber: 010263044, age: 59 , weight: 73 , BloodType: "B-" },
  { UserID: 8, Role: "donor",UserFirstName: "Loai",UserSecondName: "Ragi", Email: "LoaiRag69@yahoo.com", password: "1234",phoneNumber: 011103044, age: 37 , weight: 93 , BloodType: "O-" },
  { UserID: 9, Role: "donor",UserFirstName: "Zahra",UserSecondName: "Adel", Email: "Zahrazozo@gmail.com", password: "1234",phoneNumber: 012207044, age: 61 , weight: 80 , BloodType: "AB+" },
  { UserID: 11,Role: "admin" ,UserFirstName: "Eman",UserSecondName: "Samy", Email: "EmanSamy79@gmail.com", password: "1234",phoneNumber: 0104203044},
  { UserID: 21,Role: "admin", UserFirstName: "Adham",UserSecondName: "Ahmed", Email: "AdhamAhmed@gmail.com", password: "1234",phoneNumber: 01320673044},
  { UserID: 31,Role: "admin", UserFirstName: "Omar",UserSecondName: "Haitham", Email: "OmarHaitham@yahoo.com", password: "1234",phoneNumber: 0123225304},
  { UserID: 101,Role: "distributer", UserFirstName: "Mai",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
  { UserID: 201,Role: "distributer", UserFirstName: "Adham",UserSecondName: "Hamdy", Email: "HamdiAdham@gmail.com", password: "1234",phoneNumber: 01320673044},
  { UserID: 301,Role: "distributer", UserFirstName: "Omar",UserSecondName: "Karim", Email: "Omarkarem@yahoo.com", password: "1234",phoneNumber: 0123225304},
  { UserID: 111,Role: "collector", UserFirstName: "Lamya",UserSecondName: "Omar", Email: "Maioya@gmail.com", password: "1234",phoneNumber: 0104203044},
  { UserID: 211,Role: "collector", UserFirstName: "David",UserSecondName: "Fahmy", Email: "DavidFahmi@gmail.com", password: "1234",phoneNumber: 01320673044},
  { UserID: 311,Role: "collector", UserFirstName: "Katy",UserSecondName: "Milad", Email: "KatyMilad@yahoo.com", password: "1234",phoneNumber: 0123225304},


 ];`1`
const getUsers = (req,res) =>{
  res.render('manageusers' , {usersarr});
  
  };

const addUser = (req, res) => {
  var user = new users({
    UserID: req.body.iidd,
    UserFirstName: req.body.unamm,
    Email: req.body.emaile,
    Role: req.body.Rolle,
  });

  usersarr.push({ UserID: req.body.iidd,
    UserFirstName: req.body.unamm,
    Email: req.body.emaile,
    Role: req.body.Rolle,});
   

  user
    .save(user)
    .then((data) => {
      console.log("the user has been added to the database");
    
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
      res.render("adminhome");
    } else if (user.Role == "donor") {
      res.render("donorhome")
    } else if (user.Role == "collector") {
      res.render("collectorhome");
    } else if (user.Role == "distributer") {
      res.render("distributerhome");
    }
    else if (user.Role == "Individual") {
      res.render("home");
    }
    else {
      console.log("user not found");
    }
  });
};
const signup = (req, res) => {
  var user = new users({
    UserFirstName: req.body.usernameup,
    Email: req.body.emailup,
    Role: req.body.roles,
    password:req.body.passwordup
  });

  user
    .save(user)
    .then((data) => {
     console.log('the user has been added');
     res.sendFile("login.html", {
      root: Path.join(__dirname, "../public"),
    })})
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

const deleteuser = ((req, res) => {
  var del= req.body.idDel;
  users.deleteOne({UserID: del}, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");

});
});

module.exports = {
  addUser,
  checkuser,
  signup,
  deleteuser,
  getUsers
  
};
