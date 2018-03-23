var User = require("../models/users");
var sha1 = require("sha1");

exports.login = function(req, res) {
    const user = req.body.user;
    const pass = req.body.password;

    if (!user || !pass) {
        return res.status(418).send("I'm a teapot"); //412
    }

    User.find({ user }, function(err, users) {
        if (err) return res.send(500, err.message);
        if(users.length>1) res.send(500, "Inconsistente");
        if (users[0].password === sha1(pass)) {
            req.session.logged = true;
            return res.status(200).redirect("/api/cars");
        } else {
            return res.send(401, "Usuario o contraseña incorrectos");
        }
    });
};


exports.logout = function(req, res) {
    if (req.session) {
        req.session.logged = false;
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect("/api");
            }
        });
    }
};
