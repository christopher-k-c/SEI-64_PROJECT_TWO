// Require Express
const express = require('express');

// Require Mongoose
const mongoose = require('mongoose')
// req env config
require('dotenv').config()

// Require Express EJS Layouts
const expressLayouts = require('express-ejs-layouts');

// Initialize Express
const app = express();

// Look for all static files (CSS, JS, images, Videos, Audio) in public folder.
app.use(express.static("public"));

// Look in views folder for a file named layout.ejs
app.use(expressLayouts);

// const flash = require('connect-flash')

// Port Configurations
const PORT = process.env.PORT;



// Importing Routes
// const indexRouter = require("./routes/index");

// Mounting Routes
// app.use('/', indexRouter);

// Listen to Port with callback function.
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// NodeJS to look in a folder called views for all EJS files
app.set("view engine", "ejs");

// MongoDB Connection
mongoose.connect(process.env.mongoDBURL, 
        {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log("mongodb connected!!!");
        });







// Importing Routes
const indexRouter = require("./routes/index");