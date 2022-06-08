


// Api's for User Registration and Authentication 
const User = require("../models/User");


// REQ BCRYPT
const bcrypt = require('bcrypt');
const salt = 10;

// Require ppConfig file because Passport is required inside this file
const passport = require('../helper/ppConfig');

// HTTP GET - FOR SIGN UP - GET SIGNUP PAGE
exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}

// HTTP POST - FOR SIGN UP - POST OR SAVE DATA TO DATABASE
exports.auth_signup_post = (req, res) => {

    // creates an object of the user model
    let user = new User(req.body);

    // HASH PASSWORD
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    user.password = hashedPassword;
    // First, try to save user to database
    user
    .save()
    // If save fulfilled do the following - redirect to home page
    .then(() => {
        req.flash("success", "You have successfully Signed Up")
        res.redirect("/auth/signin"); 

    }) 
    // else log error and request they try again  
    .catch((err) => {
        console.log(err)
        // res.send("Please, Try again later... ")
        // res.redirect("/auth/signin"); 
        req.flash("danger", "You have failed to sign up")
        res.redirect("/auth/signup"); 
    }) 

}


// HTTP GET Sign-in Route 
exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");      
}

exports.auth_signin_post =
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/auth/signin",
        failureFlash: "Invalid Username",
        successFlash: "Successful login"
    })

// Logout

exports.auth_logout_get = (req, res, next) => {
    
    req.logout();
    req.flash("success", "You are successfully logged out!!");
    res.redirect("/auth/signin");
}

