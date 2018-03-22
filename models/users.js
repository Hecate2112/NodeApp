var mongoose = require("mongoose");

var User = new mongoose.Schema({
    user: { type: String },
    password: { type: String }
});

module.exports = mongoose.model("users", User, "users");
