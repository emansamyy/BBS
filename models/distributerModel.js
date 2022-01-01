const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Donations = mongoose.model("donations", donationSchema);
module.exports = {
    Donations,
};