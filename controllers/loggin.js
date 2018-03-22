var User = require("../models/users");
var sha1 = require("sha1");

//GET - Return all house in the DB []
exports.loggin = function(req, res) {
    var credentials = {
        user: req.body.user,
        password: sha1(req.body.password)
    };

    User.find(credentials, function(err, user) {
        if (err) return res.send(500, err.message);
        app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));//
    });
};

//TODO: logout