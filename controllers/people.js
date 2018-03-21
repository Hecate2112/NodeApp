var People = require("../models/people");

//GET - Return all people in the DB
exports.findAllPeople = function(req, res) {
    People.find(function(err, people) {
        if (err) res.send(500, err.message);

        console.log("GET /people");
        res.status(200).json(people);
    });
};

//GET - Return a people with specified ID
exports.findById = function(req, res) {
    People.findById(req.params.id, function(err, people) {
        if (err) return res.send(500, err.message);

        console.log("GET /people/" + req.params.id);
        res.status(200).json(people);
    });
};

//POST - Insert a new people in the DB
exports.addPeople = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var people = new People({
        name: req.body.name,
        dni: req.body.dni,
        phoneNumber: req.body.phoneNumber,
        age: req.body.age
    });

    people.save(function(err, people) {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(people);
    });
};

//PUT - Update a register already exists
exports.updatePeople = function(req, res) {
    People.findById(req.params.id, function(err, people) {
        people.name = req.body.name;
        people.dni = req.body.dni;
        people.phoneNumber = req.body.phoneNumber;
        people.age = req.body.age;

        people.save(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).json(people);
        });
    });
};

//DELETE - Delete a people with specified ID
exports.deletePeople = function(req, res) {
    People.findById(req.params.id, function(err, people) {
        people.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
