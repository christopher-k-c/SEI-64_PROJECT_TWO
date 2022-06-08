

// HTTP GET - User Profile Index - Load page
const User = require("../models/User");

const moment = require('moment');



// HTTP GET - Get Information To User Profile Index 
exports.profile_index_get = (req, res) => {

    User.find()
    .then(profiles => {
        res.render('profile/index', {profiles: profiles})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Render Update Current User Information Page
exports.profile_edit_get = (req, res) => {
    res.render('profile/edit');
}

// HTTP PUT - Posts information updated by the current user
exports.profile_edit_put = (req, res) => {

    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
    res.redirect("/profile/index")
    })
    .catch(err => {
        console.log(err)
    })
}
 
// HTTP GET - User Database For Admin
exports.help_get = (req, res) => {
    
    User.find()
    .then(profiles => {
        res.render('profile/users', {profiles: profiles, moment})
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP GET - User Detail For Admin
exports.profile_edituser_get = (req, res) => {

    User.findById(req.query.id)
    .then((profiles) => {
        res.render('profile/editUser', {profiles: profiles, moment})
    })
    .catch( err => {
        console.log(err)
    })
  
}

// HTTP GET - Admin to Update user information
exports.profile_updateuser_put = (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
    res.redirect('/profile/users')
    })
    .catch(err => {
        console.log(err)
    })
}

// HTTP DELETE - Admin to Delete users
exports.profile_users_delete = (req, res) => {
    console.log(req.query.id)

    User.findByIdAndDelete(req.query.id)
    .then( () => {
        res.redirect("/profile/users")
    })
    .catch(err => {
        console.log(err)
    })

}

