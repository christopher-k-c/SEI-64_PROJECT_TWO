// Require Express
const express = require('express');



// Require Mongoose
const mongoose = require('mongoose')

// req env config
require('dotenv').config()

// Require Express EJS Layouts
const expressLayouts = require('express-ejs-layouts');

const flash = require('connect-flash')

// Initialize Express
const app = express();




// Look for all static files (CSS, JS, images, Videos, Audio) in public folder.
app.use(express.static("public"));

// Look in views folder for a file named layout.ejs
app.use(expressLayouts);

// Port Configurations 
const PORT = process.env.PORT;

// Using body parser here because I could save auth data to database without it
app.use(express.urlencoded({extended: true}));

let session = require('express-session');
let passport = require('./helper/ppConfig');

// Session Config
app.use(session({
    // Using express sessions
    // Secret key is used for checking server requests - are they legal or not - with encryption 
    secret: process.env.SECRET,
    // If not modified save session
    saveUninitialized: true,
    // If modified do not save this session
    resave: false,
    // How long can you session be on? Once the 10 hours have past the user will be prompted for login details to re-authenticate 
    cookie: {maxAge: 36000000}
}))

// Initialize Session and Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Flash
app.use(flash());

// Sharing the information with all web pages
app.use(function(req, res, next) {
    // All messages from flash will be shared on all pages 
    // Using alerts instead of alert converts alerts into an array
    res.locals.alerts = req.flash(); 
    res.locals.currentUser = req.user;
    next();
})

// From Saad Tutorial
app.use(express.json());

// Importing Routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const productRouter = require('./routes/products');
const supplierRouter = require('./routes/suppliers');
const profileRouter = require('./routes/profiles');


// Mounting Routes
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', productRouter);
app.use('/', supplierRouter);
app.use('/', profileRouter);




// Listen to Port with callback function.
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// NodeJS to look in a folder called views for all EJS files
app.set("view engine", "ejs");



// MongoDB Connection
mongoose.connect(process.env.mongoDBURL , 
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongodb connected!!!");
    });

    


