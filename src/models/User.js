const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    role: {
        type: String,
        default: 'buyer',
        enum: ['admin', 'seller', 'buyer'],
    },
});

userSchema.plugin(passportLocalMongoose);

userSchema.methods.isAuthor = function (productAuthorId) {
    if (this.role == 'seller' && this._id.equals(productAuthorId)) {
        return true;
    }
    return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
