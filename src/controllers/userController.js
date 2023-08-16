const Logger = require('../core/Logger');
const userService = require('../services/userService');

const createUser = async (req, res) => {
    Logger.info('Entry in register user');
    const user = {
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
    };

    await userService.createUser(user, req.body.password);

    return res.redirect('/api/v1/users/login');
};

const login = (req, res) => {
    res.render('users/login');
};

module.exports = {
    createUser,
    login,
};
