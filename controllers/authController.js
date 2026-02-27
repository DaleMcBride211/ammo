const passport = require('passport');

exports.login = passport.authenticate('google', { scope: ['profile', 'email'] });

// Wrap the passport middleware and the custom callback in an array
exports.callback = [
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect to documentation or home
        res.redirect('/api-docs');
    }
];

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
};