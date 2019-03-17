const db = require("../models");

// Defining methods for the childController
module.exports = {
  //find all children related to requestor
  findAllByChild: function(req, res) {
    db.Child
      .findAll({where:{parentEmail: req.session.username}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //should I put this on Users table.
  create: function(req, res) {
    const data = req.body;
    db.Child
      .create({name:data.name,balance:data.balance,parentEmail:req.session.username})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //related to above if Child going to be in Users table.
  addBudget: function( jobId ) {
    db.Job.findOne({where: {id: jobId}})
    .then(job => {
      db.Child
        .update({balance: db.Sequelize.literal("balance +" 
        + job.budget)},{where:{id:job.assigneeId}})
      .then(transaction => console.log("Deposite money Successfully."))
      .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
  },

  deductBudget: function( productId, buyer ){
    db.Products.findOne({where: {id: productId}})
    .then(product => {
      db.Child
        .update({balance: db.Sequelize.literal("balance -" 
        + product.price)},{where:{id: buyer}})
      .then(transaction => console.log(`Withdraw money for ${product.name}`))
      .catch(err => res.status(422).json(err));
    })
    .catch(err => res.status(422).json(err));
  },

  removeChild: function(req, res) {
    console.log(req.params.id);
    db.Child
      .destroy({where:{id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
