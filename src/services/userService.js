const userRepo = require('../repositories/userRepo');

const createUser = async(user, password) => {
    return await userRepo.createUser(user, password);
}

module.exports = {
    createUser
}