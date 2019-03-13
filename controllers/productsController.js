const db = require("../models");
const piggyBanks = require("./piggyBanksController");
const children = require("./childrenController");
const Op = db.Sequelize.Op;

// Defining methods for the booksController
module.exports = {
  findAllProducts: function(req, res) {
    db.Products
      .findAll({where: {qty: {[Op.gt]:0}}})
      .then(products => res.status(200).json(products))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Products
      .findById(req.params.id)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const dataSet = {
      "name": req.body.name,
      "info": req.body.info,
      "qty": req.body.qty,
      "price": req.body.price
    }
    console.log(dataSet)
    db.Products
      .create(dataSet)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  buy: function(req, res) {
    db.Products.decrement('qty',{ where : { id: req.body.productId }})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
          
    children.deductBudget(req.body.productId, req.body.childId);  
    piggyBanks.deductFunds(req.body.productId, req.body.childid);
  },
  remove: function(req, res) {
    db.Products
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
