const db = require("../models");

// Defining methods
module.exports = {
  //find all jobs relate to requestor
  findAllByRequestor: function(req, res) {
    console.log("Calling findAllByRequestor");
    db.Job
      .findAll()
      .then(dbModel => res.json(dbModel))
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
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Job
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createJob: function(req, res) {
    console.log(req.user);
    db.Job
      .create(req.body)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Job
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  complete: function(req, res) {
    db.Job
    .findOneAndUpdate({ _id: req.params.id}, {status:"Closed"})
    .then(dbModel => res.json({
      message: "Updated Successfully"
    }))
    .catch(err=>res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Job
      .destroy({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
