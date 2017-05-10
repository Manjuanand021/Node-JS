// =======================
//Get the packages we need
// =======================
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    config = require('./config'),
    userRoutes = require('./routes/user'),
    authenticationRoute = require('./routes/authenticate');

// =======================
//Configuration part 
// =======================
const port = process.env.PORT || 3000;

//Secret variable
app.set('secretkey', config.secret);
//Connect to database
mongoose.connect(config.database);
//Use body parser to get information from POST or url parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
//Use morgan to log requests on console
app.use(morgan('dev'))

// =======================
//routes
// =======================
//Route authenticates use
app.use('/authenticate', authenticationRoute);
//Setup user related routes
app.use('/user', userRoutes);

// =======================
//Start the server
// =======================
app.listen(port, () => {
    console.log(`App ha started running on ${port}`);
});