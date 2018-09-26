var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.allBurgers(function(data) {
    res.render("index", { items: data });
  });
});

router.put("/update-burger", function(req, res) {
  burger.updateBurger(req.body.id, function(result) {
    res.redirect("/");
  });
});

router.post("/add-burger", function(req, res) {
  burger.createBurger(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

module.exports = router;
