require("dotenv").config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport')
const session = require('express-session')
const inventory = require('./controllers/customersInventory')
const request = require('request');

const options = {
    proxy: process.env.QUOTAGUARDSTATIC_URL,
    url: 'http://ip.jsontest.com/',
    headers: {
        'User-Agent': 'node.js'
    }
};

callback = (error, response, body) =>{
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

// request(options, callback);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized:true
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session())

app.use(require('flash')());

//Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null
  next();
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

inventory.inventoryCustomers()

setInterval(inventory.inventoryCustomers, 300000)

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/netmanager";
console.log(MONGODB_URI)
console.log(`the URI is ${process.env.MONGODB_URI}`)
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


