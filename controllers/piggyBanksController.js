const db = require("../models");

module.exports = {
  addFunds: function(id) {
<<<<<<< HEAD
    db.Job.findOne({ where: { id: id } })
      .then(job => {
        const dataSet = {
          ownerId: job.assigneeId,
          amount: job.budget,
          transaction: "deposit",
          description: `Completed: ${job.id} ${job.title}`
        };
        db.PiggyBank.create(dataSet);
      })
      .then(transaction => console.log("Deposite money Successfully."))
      .catch(err => console.log(err));
=======
    db.Job.findOne({where: {id: id}})
    .then(job => {
      const dataSet = {
        ownerId : job.assigneeId,
        amount : job.budget,
        transaction : "deposit",
        description : `Completed: ${job.id} ${job.title}`
      };
      db.PiggyBank.create(dataSet)})
      .then(transaction => console.log("Deposit money Successfully."))
      .catch(err => res.status(422).json(err));
>>>>>>> 66661a2102babb43145372fa857315c277acd3f9
  },
  deductFunds: function(productId, childId) {
    db.Products.findOne({ where: { id: productId } }).then(product => {
      const dataSet = {
        ownerId: childId,
        amount: product.price,
        transaction: "withdraw",
        description: `Purchased: ${product.id} ${product.name}`
      };
      db.PiggyBank.create(dataSet)
<<<<<<< HEAD
        .then(transaction => console.log("Withdraw money Successfully."))
        .catch(err => console.log(err));
=======
      .then(transaction => console.log("Withdraw money Successfully."))
      .catch(err => res.status(422).json(err));
>>>>>>> 66661a2102babb43145372fa857315c277acd3f9
    });
  },
  showAllTransactions: function(req, res) {
    console.log(req.params.id);
    db.PiggyBank.findAll({ where: { ownerId: req.params.id } })
      .then(transactions => res.status(200).json(transactions))
      .catch(err => console.log(err));
  }
};
