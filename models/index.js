"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
require("dotenv").config();

//var config = require(__dirname + "/../config/config.json")[env];
var db = {};
if (env !="development") {
  var sequelize = new Sequelize(process.env["JAWSDB_URL"]);
} else {
  var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql"
    });
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//foreign keys
db.Users = require("./Users")(sequelize,Sequelize);
db.Job = require("./Job")(sequelize, Sequelize);
db.Products = require("./Products")(sequelize, Sequelize);
db.Job.belongsTo(db.Users,{as: "requestor"});
db.Job.belongsTo(db.Users,{as: "assignTo"});
// TODO: children table 
db.Child = require("./Child")(sequelize, Sequelize);


module.exports = db;
