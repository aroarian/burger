var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.selectAll(function(data) {
      res.render("index", {items: data});
  });
});

router.get("/", function (req, res) {
  burger.selectAll(function(data) {
    res.render("/", {items: data});
  });
});


router.post("/add-burger", function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});


router.post("/eat-burger", function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});




module.exports = router;
