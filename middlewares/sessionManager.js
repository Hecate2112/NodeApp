module.exports = function(req, res, next) {
    if (req.session && req.session.logged) {
        req.session.cookie.maxAge = 60000;
        next();
    } else {
        res.redirect(200, "/api/login");
    }
};
