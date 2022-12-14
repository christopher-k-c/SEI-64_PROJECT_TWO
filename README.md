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

The first day's focus was mainly planning and concept oriented, we chose the idea, planned our ERD’s, moved onto the wireframing which I was solely responsible for and finally pair programmed the skeleton of the application.


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

As team lead I was responsible for merging conflicts and deploying the site to heroku. However, my main contribution was in the setting up of the User Authentication and Authorization, utilising Passport an authentication middleware for Node.js and bcrypt a password-hashing function used to encrypt and decrypt user passwords. In addition to the above contributions, I also built the user profile functionality and sourced the landing pages Bootstrap Theme, implemented the User alerts and more.

### Sign Up Example

![Auth](/assets/auth.png)

This controller api, **auth_signup_post**, receives a request and will return one of two responses, a redirect to the login page if the **sign in** has been successful or a redirect to the **signup page** if the signup has been a failure.

The password is hashed using bcrypt before we try to save the new user object to the database. If the save has been successful the page will redirect you to the signup page and return a success message. This message will display for 3 seconds and disappear, I did this by using the setTimeout javascript method. If it's not been successful, the page will be refreshed and a message will be displayed indicating your signup has failed.

### User Database Example

I want all admins to have access to a user database, with the ability to Read, Update and Delete users from the application. In order to display a link that's only available to administrators (a link that directs the admins to a table of users), I had to write a small line of Embedded javascript. This line checks the current users **Seniority Level** and if it's equal to **Admin** the HTML is displayed in the side bar for the admin to view.

This is the hyper link only avaiable to admin users:
![admin](/assets/admin-01.png)

This is how the hyper link is displayed, using embedded javascript:
![admin](/assets/admin-02.png)


This is the table of users that's displayed when the link is clicked:
![admin](/assets/admin-03.png)


## Technical Features
#### Authentication
* User can sign up and sign in
* User can sign out
* User can edit their own profile
* User can change their own password

#### Level Admin
* Admin can also see all other profiles
* Admin can also edit profiles and delete users


#### CRUD
* Create and update products
* Create and update suppliers for products
* Assign one suppliers for each product
* Assigned suppliers cannot be deleted

#### Charts
* Show products received per day
* Pie chart show products assigned per supplier


#### Features to be added in the future

- Reset Password whilst logged out of application
- Upload profile images
- Create Company accounts (Only displays data created by the company)
- Invite team members to join via email functionality
- Ability for users to import data via csv files

#### Bugs 

- Login alert message works but the logout messaging does not.
- When updating or adding a phone number to a user, if the first digit in the phone is zero it will not save or display.
- Also related to the phone number, there needs to be a min and maximum digit rule applied to the input, and can place as many or as few digits as the user likes into this input.
- The dashboard themes css file is 11000 lines long and we are likely only using a fraction of that. I cleared up the landing page themes css file which also came with a large amount of redundant css however the dashboard theme is particularly egregious. It unfortunately means that the project looks incredibly CSS heavy when in fact only 5% of that css is actually taking effect. If I had the time during the project I would have removed it, however, we didn't have time but it's something I will remember the next time I want to use a free bootstrap theme, I might think twice. I will research start-bootstrap theme implementations, we potentially did something incorrect along the way.



#### Key Learnings & Wins

- Experience implementing a Start-Bootstrap theme for the first time.
- Experience Implementing Authentication and Authorisation for a full stack web application for the first time.
- Gained a clearer understanding of EJS templating and embedded javascript.
- Gained insight into Authentication and Authorisation through Passport, Bcrypt and middleware implementation.

## Developers
* [https://www.linkedin.com/in/chriskcarey/](https://www.linkedin.com/in/chriskcarey/)
* [https://www.linkedin.com/in/yamilybenigni/](https://www.linkedin.com/in/yamilybenigni/)
