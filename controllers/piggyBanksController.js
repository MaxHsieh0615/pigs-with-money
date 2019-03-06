const db = require("../models");

// Defining methods for the piggyBanksController
// module.exports = {
//   findPiggyBankByChild: function(req, res) {
//     db.PiggyBank.findOne({ where: { child_name: req.body.child_name } })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findPiggyBankByPiggyBankID: function(req, res) {
//     db.PiggyBank.findOne({ where: { piggy_bank_id: req.body.piggy_bank_id } })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   updatePiggyBankBalance: function(req, res) {
//     db.PiggyBank.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// // };
// app.get("/api/addFunds/:id", piggyBanksController.addFunds);

// app.get("/api/deductFunds/:id", piggyBanksController.deductFunds);

// app.get("/api/showAllTransactions/:id", piggyBanksController.showAllTransactions);


module.exports = {
  addFunds: function(req, res) {
    db.Job.findById({where: {id: req.params.id}})
    .then(job => {
      const dataSet = {
        ownerEmail : job.assigneeEmail,
        amount : job.budget,
        transaction : "deposit",
        description : `Completed: ${job.id} ${job.title}`
      };
      db.PiggyBank.create(dataSet)
      .then(transaction => res.status(200).json(transaction))
      .catch(err => res.status(422).json(err));
    });
  },
  deductFunds: function(req, res) {
    db.Products.findById({where: {id: req.params.id}})
    .then(product => {
      const dataSet = {
        ownerEmail : req.params.email,
        amount : product.price,
        transaction : "withdraw",
        description : `Purchased: ${product.id} ${product.name}`
      };
      db.PiggyBank.create(dataSet)
      .then(transaction => res.status(200))
      .catch(err => res.status(422).json(err));
    });
  },
  showAllTransactions: function(req, res) {
    db.PiggyBank.findAll({where: {ownerEmail : req.session.username}})
    .then(transactions => res.status(200).json(transactions))
    .catch(err => res.status(422).json(err));
  }
};