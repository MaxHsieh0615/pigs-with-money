const db = require("../models");

// Defining methods for the childController
module.exports = {
  //find all children related to requestor
  findAllByChild: function(req, res) {
    db.Child
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //should I put this on Users table.
  createChild: function(req, res) {
    db.Child
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //related to above if Child going to be in Users table.
  updateChildBudget: function(req, res) {
    db.Child
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeChild: function(req, res) {
    console.log(req.params.id)
    db.Child
      .destroy({where:{id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
