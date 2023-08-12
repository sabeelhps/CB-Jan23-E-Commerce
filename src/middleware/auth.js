const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'Please login to continue');
        return res.redirect('/api/v1/users/login');
    }
    return next();
}

module.exports = isLoggedIn;