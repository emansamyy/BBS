<<<<<<< HEAD
// eman188849

const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
router.use(methodOverride("_method"));
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/ManageUsers");
=======
const express = require("express")
const router = express.Router()

const {
   
    addUser,
    checkuser,
    signup,

} = require ('../controllers/ManageUsers')
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948

router.post("/adduser", createUser);
router.post("/deleteuser:UserID", deleteUser);
router.delete("/deleteuser:UserID", deleteUser);

// router.('/:UserID', updateUser)

<<<<<<< HEAD
//Omar's router
const { createDonation } = require("../controllers/Managedonation");
router.post("/addDonation", createDonation);
=======
router.post('/adduser',     addUser);
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948

router.post('/checkuser',     checkuser);

<<<<<<< HEAD

module.exports = router;
=======
router.post('/signup',     signup);

module.exports = router
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
