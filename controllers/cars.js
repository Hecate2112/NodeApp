var Car = require("../models/cars");

//GET - Return all car in the DB []
exports.findCar = function(req, res) {
    if (req.query.id) {
        Car.findById(req.query.id, function(err, car) {
            if (err) return res.send(500, err.message);
            console.log("GET /car/" + req.query.id);

            res.status(200).json(car ? [car] : []);
        });
    } else {
        Car.find(req.query, function(err, car) {
            if (err) res.send(500, err.message);
            console.log("GET /car");

            res.status(200).json(car);
        });
    }
};


//POST - Insert a new car in the DB
exports.addCar = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var car = new Car({
        trademark: req.body.trademark,
        model: req.body.model,
        registrationTag: req.body.registrationTag,
        price: req.body.price
    });

    car.save(function(err, car) {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(car);
    });
};

//PUT - Update a register already exists
exports.updateCar = function(req, res) {
    Car.findById(req.query.id, function(err, car) {
        if (car) {
            trademark = req.body.trademark,
            model = req.body.model,
            registrationTag = req.body.registrationTag,
            price = req.body.price

            car.save(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).json(car);
            });
        } else {
            res.sendStatus(404);
        }
    });
};

//DELETE - Delete a Car with specified ID
exports.deleteCar = function(req, res) {
    Car.findById(req.query.id, function(err, car) {
        car.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
