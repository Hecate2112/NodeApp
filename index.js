var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var PeopleCtrl = require("./controllers/people");

var apiRouter = express.Router();
apiRouter
   .route('/people')
   .get(PeopleCtrl.findAllPeople)
   .post(PeopleCtrl.addPeople);
app.use("/api", apiRouter);

mongoose.connect('mongodb://localhost/local', function(err, res){
    if(err) throw err;
    console.log('Connected to database');
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
    });
});