


// Api's for User Registration and Authentication 
const User = require("../models/User");

// REQ BCRYPT
const bcrypt = require('bcrypt');
const salt = 10;

// HTTP GET - FOR SIGN UP - GET SIGNUP PAGE
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}

// HTTP POST - FOR SIGN UP - POST OR SAVE DATA TO DATABASE
exports.auth_signup_post = (req, res) => {

    // creates an object of the user
    let user = new User(req.body);


    // HASH PASSWORD
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    user.password = hashedPassword;
    // First, try to save user to database
    user
    .save()
    // If save fulfilled do the following - redirect to home page
    .then(() => {
        res.redirect("/"); 
    }) 
    // else log error and request they try again  
    .catch((err) => {
        console.log(err)
        res.send("Please, Try again later... ")
    }) 

}



// HTTP GET Sign-in Route 
exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");
}
