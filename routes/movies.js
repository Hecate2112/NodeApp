var moviesRouter = require("express").Router();

var MoviesCtrl = require("../controllers/movies");

moviesRouter
   .route('/movies')
   .get(MoviesCtrl.findMovie)
   .put(MoviesCtrl.updateMovie)
   .delete(MoviesCtrl.deleteMovie)
   .post(MoviesCtrl.addMovie);

module.exports = moviesRouter;