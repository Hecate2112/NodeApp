var People = require("../models/people");

//GET - Return all people in the DB []
exports.findPeople = function(req, res) {
    if (req.query.id) {
        People.findById(req.query.id, function(err, people) {
            if (err) return res.send(500, err.message);
            console.log("GET /people/" + req.query.id);

            res.status(200).json(people ? [people] : []);
        });
    } else {
        People.find(req.query, function(err, people) {
            if (err) res.send(500, err.message);
            console.log("GET /people");

            res.status(200).json(people);
        });
    }
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
    People.findById(req.query.id, function(err, people) {
        if (people) {
            people.name = req.body.name;
            people.dni = req.body.dni;
            people.phoneNumber = req.body.phoneNumber;
            people.age = req.body.age;

            people.save(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).json(people);
            });
        } else {
            res.sendStatus(404);
        }
    });
};

//DELETE - Delete a people with specified ID
exports.deletePeople = function(req, res) {
    People.findById(req.query.id, function(err, people) {
        people.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
