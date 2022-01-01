const collectersModel = require("../models/collectors");

function listRequests(req, res){
    collectersModel.Requests.find()
        .then((result) => {
            res.render('collectors/collectorsHome', {requests: result});
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    listRequests,
};