var orm = require("../config/orm.js");

var burger = {
    allBurgers: function(callback){
        orm.allBurgers("burgers", function(res){
            callback(res);
        });
    },
    updateBurger: function(id,callback){
        orm.updateBurger("burgers", id,callback);
    },
    createBurger: function(name,callback){
        orm.createBurger("burgers", name, callback);
    }
};

module.exports = burger;
