const express = require('express');
const userController = require('../../controllers/userController');
const router = express.Router();
const catchAsync = require('../../core/catchAsync');

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', catchAsync(userController.createUser));

router.get('/login', userController.login);

module.exports = router;