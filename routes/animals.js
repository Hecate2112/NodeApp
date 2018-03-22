var animalRouter = require("express").Router();

var AnimalCtrl = require("../controllers/animals");
var sessionManager = require("../middlewares/sessionManager");

const ROUTE = '/animals';

animalRouter
    .use(sessionManager)
    .get(ROUTE, AnimalCtrl.findAnimal)
    .put(ROUTE, AnimalCtrl.updateAnimal)
    .delete(ROUTE, AnimalCtrl.deleteAnimal)
    .post(ROUTE, AnimalCtrl.addAnimal);

module.exports = animalRouter;
