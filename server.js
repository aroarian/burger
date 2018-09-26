var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("./config/connection.js");
var bodyParser = require("body-parser");
var router = require("./controllers/burgers_controller.js");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", router);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
