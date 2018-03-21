var mongoose = require('mongoose');

var People = new mongoose.Schema({
  name:         { type: String },
  dni:          { type: String },
  phoneNumber:  { type: Number },
  age:          { type: Number }
});

module.exports = mongoose.model('people', People, 'people');