var mongoose = require('mongoose');

var Movie = new mongoose.Schema({
  name:     { type: String },
  year:     { type: Number },
  duration: { type: Number },
  score:    { type: Number }
});

module.exports = mongoose.model('movies', Movie, 'movies');