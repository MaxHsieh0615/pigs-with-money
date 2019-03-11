const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getAllProducts: function(req, res) {
    console.log('words in here')
    db.Products
      .findAll()
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
  update: function(req, res) {
    db.Products
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Products
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
