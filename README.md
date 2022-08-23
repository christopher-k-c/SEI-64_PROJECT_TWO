![General Assembly's Logo](https://camo.githubusercontent.com/603ef5eae7d28900a9678ae96c6c60a9c72f8a059c328b28cf978df999cea1f8/68747470733a2f2f692e696d6775722e636f6d2f6c7a56493364382e706e67)

## Try our project
<a href="https://inventorycontrolsystem02.herokuapp.com/">Deployed Project</a>

# Project: Inventory Control System
This is a Full Stack Application for micro, small and medium food businesses that could benefit from controlling stock rotation of products and avoid food waste. It is built with Express, Node.js, MongoDB and more, It was a two person project which took 4 days and I was the team lead. Users are able to Sign In, Sign up and Sign out. Authenticated Users hold privileges over non-authenticated users. There are two main categories, Products and Suppliers, each have full CRUD operations available to Authenticated Users. On top of the Express EJS templates that display our content we have implemented two Bootstrap themes, one for the landing page and another for the dashboard.

### User View When Loggen In
![Screenshot](/public/images/ics-dashboard-system.jpg)


## Goal
There were approximately 5,000 micro, Small and Medium Enterprises in the food and drink sector, according to [gov.uk](https://www.gov.uk/government/statistics/food-statistics-pocketbook/food-statistics-in-your-pocket), Our aim was to provide these small businesses with an easy to use application.


### Entity Relationship Diagram
Here we detail the One to Many relationship a User has with our Supplier and Products. We also detail the access and functionality privileges an admin holds over an employee user.

![ERD](/assets/ERD-SEI-project-2.jpg)

### Dashboard wireframe
![WireFarmes](/assets/dashboard.png)
![WireFarmes](/assets/detail.png)

## Technologies used

* HTML 
* CSS
* JavaScript
* jQuery
* MongoDB
* Express
* Node.js
* Chart.js

## Dependencies:

bcrypt, connect-flash, dotenv, ejs, express, 
express-ejs-layouts, express-session, method-override, 
moment, mongoose, nodemon, passport, passport-local

### Dev tools

* Git
* Heroku
* MongoDB Online
* Bootstrap


## Contribution Examples 

As team lead I was responsible for merging conflicts and deploying the site to heroku. However, my main contribution was in the setting up of the User Authentication and Authorization, utilising Passport an authentication middleware for Node.js and bcrypt a password-hashing function used to encrypt and decrypt user passwords. Sourcing the landing page Bootstrap Theme, User alerts and more.

#### Authentication

![Auth](/assets/auth.png)

## Technical Features
### Authentication
* User can sign up and sign in
* User can sign out
* User can edit their own profile
* User can change their own password

#### Level Admin
* Admin can also see all other profiles
* Admin can also edit profiles and delete users

### Resources

#### CRUD
* Create and update products
* Create and update suppliers for products
* Assign one suppliers for each product
* Assigned suppliers cannot be deleted

#### Charts
* Show products received per day
* Pie chart show products assigned per supplier


### Features to be added in the future

- Reset Password whilst logged out of application
- Upload profile images
- Create Company accounts (Only displays data created by the company)
- Invite team members to join via email functionality
- Ability for users to import data via csv files

### Bugs 

- Login alert message works but the logout messaging does not.
- When updating or adding a phone number to a user, if the first digit in the phone if a zero it will not save or display. 
- Also related to the phone number, there needs to be a min and maximum digit rule applied to the input, and can place as many or as few digits as the user likes into this input.


### Key Learnings & Wins

- I implemented a Bootstrap theme for the first time.
- I implemented Authentication and Authorisation for a full stack web application for the first time.


## Developers
* [https://www.linkedin.com/in/chriskcarey/](https://www.linkedin.com/in/chriskcarey/)
* [https://www.linkedin.com/in/yamilybenigni/](https://www.linkedin.com/in/yamilybenigni/)
