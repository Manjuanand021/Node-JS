const express = require('express'),
    routes = express.Router(),
    jwt = require('jsonwebtoken'),
    User = require('../models/user');

routes.post('/', (req, res) => {
    //Find user
    User.findOne({
        name: req.body.name
    }, (err, user) => {
        if (err) throw err;
        console.log(user);
        if (!user) {
            console.log(`Authetication failed, User not found.`);
            res.json({
                success: false,
                message: 'Authetication failed, User not found.'
            });
        } else if (user.password !== req.body.password) {
            console.log(`Authetication failed, Wrong password.`);
            res.json({
                success: false,
                message: 'Authetication failed, Wrong password.'
            });
        } else {
            // if user is found and password is right
            // create a token
            const token = jwt.sign(user, req.app.get('secretkey'), {
                expiresIn: 1440 // expires in 24 hours
            });
            console.log(`token - ${token}`);
            console.log('User found and password correct.');
            //Return the informtion including token as json
            res.json({
                success: true,
                message: 'User found and password correct.',
                token: token
            });
        }

    });
});

module.exports = routes;