// load express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// load sequelize models
const db = require(path.join(__dirname, 'models/burger.js'));

// load Handlebars template engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
// load and use routes set in the controller
const routes = require(path.join(__dirname, 'controllers', 'burgers_controller.js'));
app.use(routes);

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

// API routing
//require(path.join(__dirname, "app", "routing", "apiRouting.js"))(app, path, fs, moment);

// set dynamic port and listen
app.set("port", process.env.PORT || 8080);
 
    app.listen(app.get("port"), function () {
        console.log("Listening on port " + app.get("port"));
    });
