const model = require("../models/collectors");

function listDonations(req, res) {
    model.Donations.find()
        .then((result) => {
            res.render("distributerhome", {
                data: result
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

function deleteDonation(req,res){
    const id = req.params.id;
    console.log(id);
    model.Donations.findByIdAndDelete(id).then(result => {
        res.json({redirect: '/disributer'});
    });
}
module.exports = {
    listDonations,
    deleteDonation
};