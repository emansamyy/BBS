// eman188849


const Path = require('path');
const users = require('../models/db');


const checkuser = ((req, res) => {
 
  var email_ = req.body.logemail;
   var us =  users.find({Email:email_});
   if (us.Role == "admin"){
  
    res.redirect("../public/adminhome.html");
     
   }
   else {
    // res.redirect("../public/home.html");
    console.log(us.Role);
   }
  
  
   
});

const createUser = ((req, res) => {
    var user = new users({
        UserID: req.body.iidd,
        UserFirstName: req.body.unamm,
        Email: req.body.emaile,
        Role: req.body.Rolle
      });
    
    
      user
        .save(user)
        .then(data => {
          res.send("the user has been added to the database");
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
});

const updateUser = ((req, res) => {
    
    const id = Number(req.params.UserID)
    const index = users.findIndex(user => user.id === id)
    const updatedUser = {
        id: users[index].id,
        name: req.body.name,
        
    }

    users[index] = updatedUser
    res.status(200).json('User updated')
});

const deleteUser = ((req, res) => {
  const userIndex = getUserIndex(req.params.UserID)

 if (userIndex === -1) return res.status(404).json({})

 users.splice(userIndex, 1)
 res.redirect('/');
});

module.exports = {
  
   
    createUser,
    updateUser,
    deleteUser,
    checkuser
}