var Movie = require("../models/movies");

//GET - Return all movie in the DB []
exports.findMovie = function(req, res) {
    if (req.query.id) {
        Movie.findById(req.query.id, function(err, movie) {
            if (err) return res.send(500, err.message);
            console.log("GET /movie/" + req.query.id);

            res.status(200).json(movie ? [movie] : []);
        });
    } else {
        Movie.find(req.query, function(err, movie) {
            if (err) res.send(500, err.message);
            console.log("GET /movie");

            res.status(200).json(movie);
        });
    }
};


//POST - Insert a new movie in the DB
exports.addMovie = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var movie = new Movie({
        name: req.body.name,
        year: req.body.year,
        duration: req.body.duration,
        score: req.body.score
    });

    movie.save(function(err, movie) {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(movie);
    });
};

//PUT - Update a register already exists
exports.updateMovie = function(req, res) {
    Movie.findById(req.query.id, function(err, movie) {
        if (movie) {
            name = req.body.name,
            year = req.body.year,
            duration = req.body.duration,
            score = req.body.score

            movie.save(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).json(movie);
            });
        } else {
            res.sendStatus(404);
        }
    });
};

//DELETE - Delete a movie with specified ID
exports.deleteMovie = function(req, res) {
    Movie.findById(req.query.id, function(err, movie) {
        movie.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
