// eman188849

const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
router.use(methodOverride("_method"));
const {
  createUser,
  updateUser,
  deleteUser,
  checkuser,
} = require("../controllers/ManageUsers");

router.get("/checkuser" , checkuser);

router.post("/adduser", createUser);

router.post("/deleteuser:UserID", deleteUser);
router.delete("/deleteuser:UserID", deleteUser);

// router.('/:UserID', updateUser)
module.exports = router;
