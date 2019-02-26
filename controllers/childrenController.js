const db = require("../models");

// Defining methods
module.exports = {

  //find all jobs relate to AssignedTo
  findAllByChild: function(req, res) {
    db.Job
      .findAll({where:{AssignedToEmail:req.body.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Job
      .findById({where: {_id: req.params.id, AssignedToEmail: req.params.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createChild: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateChildBudget: function(req, res) {
    db.Users
      .findOneAndUpdate({ email: req.params.email}, {budget: req.params.budget})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeChild: function(req, res) {
    db.Users
      .destroy({ email: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
