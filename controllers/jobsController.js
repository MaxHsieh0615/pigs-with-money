const db = require("../models");

// Defining methods
module.exports = {
  //find all jobs relate to requestor
  findAllByRequestor: function(req, res) {
    db.Job
      .findAll()
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find all jobs relate to AssignedTo
  findAllByAssignedTo: function(req, res) {
    
    db.Job
      .findAll({where:{AssignedToEmail:req.body.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getJobs: function(req,res) {
    db.Job
      .findAll({where:{requestorEmail: req.session.username}})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Job
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createJob: function(req, res) {
    const dataSet = {
      "title" : req.body.title,
      "description" : req.body.description,
      "budget" : req.body.budget,
      "requestorEmail" : req.session.username}
    db.Job
      .create(dataSet)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Job
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  complete: function(req, res) {
    db.Job
    .findOneAndUpdate({ id: req.params.id}, {status:"Closed"})
    .then(dbModel => res.json({
      message: "Updated Successfully"
    }))
    .catch(err=>res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Job
      .destroy({ id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
