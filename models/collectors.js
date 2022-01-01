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

const donationSchema = new Schema({
    bloodType: {
        type: String,
        require: true,
    },
    donationDate: {
        type: Date,
        require: true,
    },
    collector: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
});

const Requests = mongoose.model("donorsforms", requestsSchema);
const Donations = mongoose.model("donations", donationSchema);
module.exports = {
    Requests,
    Donations,
};