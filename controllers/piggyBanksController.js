const db = require("../models");

module.exports = {
  addFunds: function(id) {
    db.Job.findOne({where: {id: id}})
    .then(job => {
      const dataSet = {
        ownerId : job.assigneeId,
        amount : job.budget,
        transaction : "deposit",
        description : `Completed: ${job.id} ${job.title}`
      };
      db.PiggyBank.create(dataSet)})
      .then(transaction => console.log("Deposite money Successfully."))
      .catch(err => console.log(err));
  },
  deductFunds: function(productId,childId) {
    db.Products.findOne({where: {id: productId}})
    .then(product => {
      const dataSet = {
        ownerId : childId,
        amount : product.price,
        transaction : "withdraw",
        description : `Purchased: ${product.id} ${product.name}`
      };
      db.PiggyBank.create(dataSet)
      .then(transaction => console.log("Withdraw money Successfully."))
      .catch(err => console.log(err));
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
