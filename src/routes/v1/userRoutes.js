const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();
const catchAsync = require('../../core/catchAsync');
const passport = require('passport');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(userController.createUser));

router.get('/login', userController.login);

router.post(
    '/login',
    passport.authenticate(
        'local',
        {
            failureRedirect: '/api/v1/users/login',
            failureFlash: true,
        },
    ),
    (req, res) => {
        req.flash('success', `Welcome back ${req.user.username}`);
        res.redirect('/api/v1/products');
    },
);

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Logged Out Successfully!');
        res.redirect('/api/v1/users/login');
    });
});

module.exports = router;