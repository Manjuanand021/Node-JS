module.exports = (app, passport) => {
    //##########################
    //Home page with login links
    //##########################
    app.get('/', (req, res) => {
        res.render('index.ejs'); //load index.ejs file
    });

    //##########################
    //Login page - login form
    //##########################
    app.get('/login', (req, res) => {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
            // message: 'lol'
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    //##########################
    //Signup form - sign up form
    //##########################
    app.get('/signup', (req, res) => {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
            // message: 'lollaa'
        });
    });

    //process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages                                   
    }));

    //##########################
    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    //##########################

    //##########################
    //Profile page
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    //##########################
    app.get('/profile', isLoggedIn, (req, res) => {
        // render the page and pass in any flash data if it exists
        res.render('profile.ejs', {
            message: req.user // get the user out of session and pass to template
        });
    });

    //##########################
    //Logout
    //##########################
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated)
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}