var peopleRouter = require("express").Router();

var PeopleCtrl = require("../controllers/people");

peopleRouter
   .route('/people')
   .get(PeopleCtrl.findPeople)
   .put(PeopleCtrl.updatePeople)
   .delete(PeopleCtrl.deletePeople)
   .post(PeopleCtrl.addPeople);

module.exports = peopleRouter;