// REQUIRING MONGOOSE
const mongoose = require('mongoose')

//BCRYPT WILL GO HERE

const bcrypt = require('bcrypt');


// USER SCHEMA
const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be more than three characters"],
        maxlength: [100, "Name must be less than 100 Characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "First name must be more than three characters"],
        maxlength: [100, "Name must be less than 100 Characters"]
    },
    jobTitle: {
        type: String,
        required: true,
        minlength: [3, "First name must be more than three characters"],
        maxlength: [70, "Job Title must be less than 100 Characters"]
    },
    level: {
        type: String,
        required: false
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        // if email already exists then retirn true - stops user from registereing with email adddrss that alreay used
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, " Your password is weak."]
    },
    telephone: {
        type: Number,
        required: false,    
    },
    userName: {
        type: String,
        required: false
    }
    },
    
{
 timestamps: true


})

// VERIFY PASSWORD METHOD
// Need to go over the lecture again/google 
userSchema.methods.verifyPassword = function(password) {
    console.log(password + "Plain Text Password");
    console.log(this.password + " Encrypted Password");
    return bcrypt.compareSync(password, this.password);

}

// BUILDING MODEL OF USER SCHEMA
// CHANGED "User" to "user"
const User = mongoose.model("user", userSchema);

// EXPORTING USER FOR US TO USE IN OTHER FILES
module.exports = User;

