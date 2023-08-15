const User = require('../models/User');

const createUser = (user, password) => User.register(user, password);

module.exports = {
    createUser,
};
