const db = require("../models");

// Defining methods for the piggyBanksController
module.exports = {
  findPiggyBankByChild: function(req, res) {
    db.PiggyBank.findOne({ where: { child_name: req.body.child_name } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPiggyBankByPiggyBankID: function(req, res) {
    db.PiggyBank.findOne({ where: { piggy_bank_id: req.body.piggy_bank_id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatePiggyBankBalance: function(req, res) {
    db.PiggyBank.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
