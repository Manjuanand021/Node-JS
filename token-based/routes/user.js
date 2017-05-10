const express = require('express'),
    routes = express.Router(),
    jwt = require('jsonwebtoken'),
    User = require('../models/user');

//route middleware to verify a token
routes.use((req, res, next) => {
    console.log('here');
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, app.get('secretkey'), (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        })
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'no authentication token provided.'
        });
    }

});

routes.get('/setup', (req, res) => {
    const manju = new User({
        name: 'Toladinni',
        password: 'abc123',
        admin: false
    });

    manju.save((err) => {
        if (err)
            throw err;
        console.log('User has saved successfully.');
        res.json({
            success: true
        });
    });
});

// route to return all users 
routes.get('/all', (req, res) => {
    User.find({}, (err, users) => {
        res.json(users);
    })
})

module.exports = routes;