const express = require("express")
const router = express.Router()

const {
   
    addUser,
    checkuser,
    signup,

} = require ('../controllers/ManageUsers')

router.post('/adduser',     addUser);

router.post('/checkuser',     checkuser);

router.post('/signup',     signup);

module.exports = router
