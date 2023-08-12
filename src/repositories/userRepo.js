const User = require('../models/User');

const createUser = (user, password) => {
    return User.register(user, password);
}

module.exports = {
    createUser
}