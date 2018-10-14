// load express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// load sequelize models
const db = require(path.join(__dirname, "models"));

// load Handlebars template engine
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// load and use routes set in the controller
const routes = require(path.join(__dirname, 'controllers', 'burgers_controller.js'));
app.use(routes);

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

// API routing
//require(path.join(__dirname, "app", "routing", "apiRouting.js"))(app, path, fs, moment);

// set dynamic port and listen
app.set("port", process.env.PORT || 8080);
db.sequelize.sync().then(() => {
    app.listen(app.get("port"), function () {
        console.log("Listening on port " + app.get("port"));
    });
});