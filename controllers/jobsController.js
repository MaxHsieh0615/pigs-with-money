const db = require("../models");
const piggyBanks = require("./piggyBanksController");
const children = require("./childrenController");
const Op = db.Sequelize.Op;
// Defining methods
module.exports = {
  //find all jobs relate to requestor
  findAllByRequestor: function(req, res) {
    db.Job
      .findAll({include: [db.Child],where:{assigneeId: req.session.username}})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find all jobs relate to AssignedTo
  findAllByAssignedTo: function(req, res) {
    
    db.Job
      .findAll({where:{AssigneeId:req.body.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getJobs: function(req,res) {
    db.Job
      .findAll({include: [{model: db.Child,as: "assignee"}] ,where:{requestorEmail: req.session.username,status: {[Op.ne]:"Closed"}}})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => //res.status(422).json(err)
      console.log(err));
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
      "requestorEmail" : req.session.username,
      "status" : "Open"}
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
      .update({status:"Closed"},{where: {id: req.body.jobId}})
      .then(dbModel => res.status(200).json(dbModel) )
      .catch(err=>res.status(422).json(err));
      
    children.addBudget(req.body.jobId);  
    piggyBanks.addFunds(req.body.jobId);
  },
  remove: function(req, res) {
    db.Job
      .destroy({ id: req.params.id })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  assignJob: function(req, res){
    const {jobId, childId} = req.body; 
    db.Job.update({assigneeId:childId,status:"Assigned"},{where:{id: jobId}})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.state(422).json(err));
  }

};
