var housesRouter = require("express").Router();

var HousesCtrl = require("../controllers/houses");

housesRouter
   .route('/houses')
   .get(HousesCtrl.findHouse)
   .put(HousesCtrl.updateHouse)
   .delete(HousesCtrl.deleteHouse)
   .post(HousesCtrl.addHouse);

module.exports = housesRouter;