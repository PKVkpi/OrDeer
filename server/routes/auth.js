const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');

let User = require('../models/user.model');

router.get('/login', function (req, res) {

    const data = {};

    data.title = 'Login';

    res.json(data);
});

router.get('/signup', function (req, res) {
    const data = {};

    data.title = 'Signup';

    res.json(data);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.json('User logged out');
});


router.post('/signup', async function (req, res, next) {

    const name = req.body.name || null;
    const email = req.body.email;
    let password = req.body.password;

    try {
        if (req.body.email) {
            const existing = await User.findOne({ email: req.body.email });

            if (existing) {
                return res.json('User Already Exists');
            }

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(req.body.password, salt);

            const newUser = new User({ name, email, password });

            await newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));

            req.logIn(newUser, function () {
                res.json('User signed up and logged in');

            });
        }
    }
    catch (error) {
        next(error);
    }
}
)


module.exports = function (passport) {

    router.post('/login', passport.authenticate('local', {
        failureRedirect: '/auth/login',
    }), async function (req, res) {
        let options = {
            maxAge: 1000 * 60 * 15, // would expire after 15 minutes
            httpOnly: true, // The cookie only accessible by the web server
            signed: false // Indicates if the cookie should be signed
        }

        // Set cookie
        res.cookie('cookieName', 'cookieValue', options) // options is optional
        res.send('')

    })


    return router;
};