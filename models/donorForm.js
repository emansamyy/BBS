const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  formID: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  bloodType: {
    type: String,
    require: true,
  },
  emailAddress: {
    type: String,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
});

//const Request = mongoose.model("donorsforms", requestsSchema);
//module.exports = Request;
