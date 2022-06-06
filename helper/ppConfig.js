// PASSPORT CONFIG FILE
// REQUIRE PASSPORT 
const passport = require('passport')

// Requiring local passport strategy 
const LocalStrategy = require('passport-local').Strategy;

// Imported User Model from models/User 
const User = require("../models/User")

// Serialize 
// Saving the data into the session, in this case the ID is being used
passport.serializeUser(function(user, done){
    done(null, user.id)
})


// Deserialize 
// Reading the information from the database according to the user ID
passport.deserializeUser(function(user, done){
    User.findById(id, function(err, user){
        done(err, user);
    })
})


passport.use(new LocalStrategy(
    {
        usernameField: "emailAddress",
        passwordField: "password"
    },
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
          // User doesn't exists or some erro
        if (err) { return done(err); }
        // If the user object in the models is not there return null
        if (!user) { return done(null, false); }
        // If user is there but their password cannot be verified in the database against what??? ******* NEED TO ASK *******
        if (!user.verifyPassword(password)) { return done(null, false); }
        // Else User found successfully 
        return done(null, user);
      });
    }
));

// EXPORTING SO THAT IT IS AVAILABLE IN OTHER FILES AS A MODULE
module.exports = passport; 