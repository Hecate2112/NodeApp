var Animal = require("../models/animals");

//GET - Return all animal in the DB []
exports.findAnimal = function(req, res) {
    if (req.query.id) {
        Animal.findById(req.query.id, function(err, animal) {
            if (err) return res.send(500, err.message);
            console.log("GET /animal/" + req.query.id);

            res.status(200).json(animal ? [animal] : []);
        });
    } else {
        Animal.find(req.query, function(err, animal) {
            if (err) res.send(500, err.message);
            console.log("GET /animal");

            res.status(200).json(animal);
        });
    }
};


//POST - Insert a new animal in the DB
exports.addAnimal = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var animal = new Animal({
        specie: req.body.specie,
        color: req.body.color,
        name: req.body.name
    });

    animal.save(function(err, animal) {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(animal);
    });
};

//PUT - Update a register already exists
exports.updateAnimal = function(req, res) {
    Animal.findById(req.query.id, function(err, animal) {
        if (animal) {
            specie = req.body.specie,
            color = req.body.color,
            name = req.body.name

            animal.save(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).json(animal);
            });
        } else {
            res.sendStatus(404);
        }
    });
};

//DELETE - Delete a Animal with specified ID
exports.deleteAnimal = function(req, res) {
    Animal.findById(req.query.id, function(err, animal) {
        animal.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
