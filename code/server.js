var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("../code/config/connection.js")
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res){
    connection.query("SELECT * FROM burgers", function(err, data){
        res.render("index", {
            items: data
        });
    });
});


app.post("/add-burger", function(req, res){
    var id = req.body.id;
   // res.send(id);
    connection.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`)
})









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });