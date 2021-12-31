const express = require("express")
const router = express.Router()

const {
   
    addUser,
    checkuser,
    signup,

} = require ('../controllers/ManageUsers')

router.post("/adduser", createUser);
router.post("/deleteuser:UserID", deleteUser);
router.delete("/deleteuser:UserID", deleteUser);

// router.('/:UserID', updateUser)


router.post('/checkuser',     checkuser);


module.exports = router;
