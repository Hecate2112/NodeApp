var animalRouter = require("express").Router();

var AnimalCtrl = require("../controllers/animals");

animalRouter
   .route('/animals')
   .get(AnimalCtrl.findAnimal)
   .put(AnimalCtrl.updateAnimal)
   .delete(AnimalCtrl.deleteAnimal)
   .post(AnimalCtrl.addAnimal);

module.exports = animalRouter;