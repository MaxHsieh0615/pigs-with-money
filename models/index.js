"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
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
db.Users = require("./Users")(sequelize, Sequelize);
db.Job = require("./Job")(sequelize, Sequelize);
<<<<<<< HEAD
db.Job.belongsTo(db.Users, { as: "requestor" });
db.Job.belongsTo(db.Users, { as: "assignTo" });
=======
db.Job.belongsTo(db.Users,{as: "requestor"});
db.Job.belongsTo(db.Users,{as: "assignTo"});
// TODO: children table 
db.Child = require("./Child")(sequelize, Sequelize);


>>>>>>> cea0961d785eac2b191698e4ecf981bdcd900bd0
module.exports = db;
