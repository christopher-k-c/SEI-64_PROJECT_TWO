

// HTTP GET - User Profile Index - Load page
const User = require("../models/User");

exports.profile_index_get = (req, res) => {
    res.render("profile/index");
}

// HTTP POST - Post Information To User Profile Index - POST DATA

exports.profile_index_get = (req, res) => {

    User.find()
    .then(profiles => {
        res.render('profile/index', {profiles: profiles})
    })
    .catch(err => {
        console.log(err);
    })
}


