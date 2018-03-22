var mongoose = require('mongoose');

var House = new mongoose.Schema({
  city:         { type: String },
  bedrooms:     { type: Number },
  meters:       { type: Number },
  price:        { type: Number }
});

module.exports = mongoose.model('houses', House, 'houses');