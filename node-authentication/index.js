//**********************
//Get the packages we need
//**********************
const express = require('express'),
    url = require('url'),
    morgan = require('morgan'),
    _ = require('lodash'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    passport = require('passport'),
    flash = require('connect-flash'),
    config = require('./config'),
    routes = require('./routes/route.js'),
    port = process.env.PORT || 3000,
    app = express();

//**********************
//Initial configuration
//**********************
//Set the view angine to ejs
app.set('view engine', 'ejs');
//Serve static files from public folder using express static
app.use('/assets', express.static('public'))
//Connect to database
mongoose.connect(config.db);
//Use morgan to log requests to console
app.use(morgan('dev'));
//Use cookie parser to read cookies from reqeust body- needed for authentication
app.use(cookieParser());
//Use body parser to get information from POST or url parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Need these for passport setup
// app.use(session({
//     secret: config.sessionSecret //Session secret
// }));
// app.use(passport.initialize()); //initialize passport
// app.use(passport.session()); //for persistant login session
// app.use(flash()); //Use connect-flash for flash messages stored in session

//**********************
//routes
//**********************
// routes(app, passport); //add other routes
routes(app); //add other routes

//**********************
//Kick start the app
//**********************
app.listen(port, () => {
    console.log('App is running...');
});