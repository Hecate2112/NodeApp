var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    session = require('express-session'),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

var peopleRouter = require("./routes/people"),
    animalsRouter = require("./routes/animals"),
    carsRouter = require("./routes/cars"),
    housesRouter = require("./routes/houses"),
    moviesRouter = require("./routes/movies");

var apiRouter = express.Router();
apiRouter
    .use(peopleRouter)
    .use(animalsRouter)
    .use(carsRouter)
    .use(housesRouter)
    .use(moviesRouter);
app.use("/api", apiRouter);

mongoose.connect("mongodb://localhost/local", function(err, res) {
    if (err) throw err;
    console.log("Connected to database");
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
    });
});
