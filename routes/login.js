var loginRouter = require("express").Router();

var loginCtrl = require("../controllers/login");

loginRouter
    .route("/login")
    .post(loginCtrl.login)
    .put(loginCtrl.logout);

module.exports = loginRouter;
