
// eman188849
const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    UserID: Number,
    Role:  String, 
    UserFirstName: String,
    UserSecondName:   String,
    Email: String,
    password: String,
    phoneNumber: Number,
    age: Number,
    weight: Number,
    BloodType: String
    }
);


let AdminSchema = mongoose.Schema({
    AdminID: Number,
    UserFirstName: String,
    UserSecondName:   String,
    Email: String,
    password: String,
    phoneNumber: Number
    }
);




let CollectorSchema = mongoose.Schema({
    CollectorID: Number,
    UserFirstName: String,
    UserSecondName:   String,
    Email: String,
    password: String,
    phoneNumber: Number
   
    }
);



let DistributerSchema = mongoose.Schema({
    DistID: Number,
    UserFirstName: String,
    UserSecondName:   String,
    Email: String,
    password: String,
    phoneNumber: Number
   
    }
);


let DonorSchema = mongoose.Schema({
    UserID: Number,
    Role:  String, 
    UserFirstName: String,
    UserSecondName:   String,
    Email: String,
    password: String,
    phoneNumber: Number,
    age: Number,
    weight: Number,
    BloodType: String
   
    }
);




let User = module.exports = mongoose.model('User', UserSchema);