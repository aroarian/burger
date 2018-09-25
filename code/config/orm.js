var connection = require("./connection.js");

var orm = {
    allBurgers: function(table, callback){
        connection.query(`SELECT * FROM ${table};`, function(err,result){
            if (err) throw err;
            callback(result);
        })
    },
    updateBurger: function(table, condition, callback){
        connection.query(`UPDATE ${table} SET devoured=true WHERE id=${condition};`, function(err,result){
            if (err) throw err;
            callback(result);
        });
    },
    createBurger: function(table,values,callback){
        connection.query(`INSERT INTO ${table} (burger_name, devoured) VALUES ("${values}", false);`, function(err,result){
            if (err) throw err;
            callback(result);
        })
    }
}
module.exports = orm;
