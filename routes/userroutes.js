const express = require("express")
const router = express.Router()

const {
   getUsers,
    addUser,
    checkuser,
    signup,
    deleteuser,
 
} = require ('../controllers/ManageUsers')

router.get("/users" ,getUsers);

router.post('/adduser',     addUser);

router.post('/checkuser',     checkuser);

router.post('/signup',     signup);

router.post('/deleteuser',     deleteuser);

module.exports = router
