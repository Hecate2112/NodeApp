var mongoose = require('mongoose');

var Animal = new mongoose.Schema({
  specie:       { type: String },
  color:        { type: String },
  name:         { type: String }
});

module.exports = mongoose.model('animals', Animal, 'animals');