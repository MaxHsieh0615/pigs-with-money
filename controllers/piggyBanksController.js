const db = require("../models");

module.exports = {
  addFunds: function(req, res) {
    db.Job.findById({ where: { id: req.params.id } }).then(job => {
      const dataSet = {
        ownerEmail: job.assigneeEmail,
        amount: job.budget,
        transaction: "deposit",
        description: `Completed: ${job.id} ${job.title}`
      };
      db.PiggyBank.create(dataSet)
        .then(transaction => res.status(200).json(transaction))
        .catch(err => res.status(422).json(err));
    });
  },
  deductFunds: function(req, res) {
    db.Products.findById({ where: { id: req.params.id } }).then(product => {
      const dataSet = {
        ownerEmail: req.params.email,
        amount: product.price,
        transaction: "withdraw",
        description: `Purchased: ${product.id} ${product.name}`
      };
      db.PiggyBank.create(dataSet)
        .then(transaction => res.status(200))
        .catch(err => res.status(422).json(err));
    });
  },
  showAllTransactions: function(req, res) {
    db.Child.findOne({ where: { parentEmail: req.session.username } }).then(
      children => {
        db.PiggyBank.findAll({ where: { ownerEmail: req.session.username } })
          .then(transactions => res.status(200).json(transactions))
          .catch(err => console.log(err));
      }
    );
  }
};
