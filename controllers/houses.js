var House = require("../models/houses");

//GET - Return all house in the DB []
exports.findHouse = function(req, res) {
    if (req.query.id) {
        House.findById(req.query.id, function(err, house) {
            if (err) return res.send(500, err.message);
            console.log("GET /house/" + req.query.id);

            res.status(200).json(house ? [house] : []);
        });
    } else {
        House.find(req.query, function(err, house) {
            if (err) res.send(500, err.message);
            console.log("GET /house");

            res.status(200).json(house);
        });
    }
};


//POST - Insert a new house in the DB
exports.addHouse = function(req, res) {
    console.log("POST");
    console.log(req.body);

    var house = new House({
        city: req.body.city,
        bedrooms: req.body.bedrooms,
        meters: req.body.meters,
        height: req.body.height,
        price: req.body.price
    });

    house.save(function(err, house) {
        if (err) return res.status(500).send(err.message);
        res.status(200).json(house);
    });
};

//PUT - Update a register already exists
exports.updateHouse = function(req, res) {
    House.findById(req.query.id, function(err, house) {
        if (house) {
            city = req.body.city,
            bedrooms = req.body.bedrooms,
            meters = req.body.meters,
            height = req.body.height,
            price = req.body.price

            house.save(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).json(house);
            });
        } else {
            res.sendStatus(404);
        }
    });
};

//DELETE - Delete a house with specified ID
exports.deleteHouse = function(req, res) {
    House.findById(req.query.id, function(err, house) {
        house.remove(function(err) {
            if (err) return res.status(500).send(err.message);
            res.status(200).send();
        });
    });
};
