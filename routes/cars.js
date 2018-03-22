var carsRouter = require("express").Router();

var CarsCtrl = require("../controllers/cars");

carsRouter
   .route('/cars')
   .get(CarsCtrl.findCar)
   .put(CarsCtrl.updateCar)
   .delete(CarsCtrl.deleteCar)
   .post(CarsCtrl.addCar);

module.exports = carsRouter;