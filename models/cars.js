var mongoose = require('mongoose');

var Car = new mongoose.Schema({
  trademark:        { type: String },
  model:            { type: String },
  registrarionTag:  { type: String },
  price:            { type: Number }
});

module.exports = mongoose.model('cars', Car, 'cars');