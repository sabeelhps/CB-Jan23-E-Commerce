const userRepo = require('../repositories/userRepo');

const createUser = async (user, password) => await userRepo.createUser(user, password);

module.exports = {
    createUser,
};
