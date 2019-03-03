const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .findAll({where:{email:req.body.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findOne: function(req,res){
    db.Users
      .findOne({where:{email:req.body.email}} ).then(
        user=> res.json(user)
      )
      .catch(err =>{
        //console.log('User.js create user error: ', err);
        return res.status(422).json(err);
      });
  },

  findOrCreate: function(req,res){
    console.log("user signup");
    const { email, password } = req.body;
    db.Users
      .findOrCreate({where:{email:email},defaults:{email:email,password:password}} )
      .then(result=> {
        //result true: record is created. false: record already exists. 
        result[1] ?
          res.status(200).json({message:"Created user"}) :
          res.status(200).json({errMsg:"User already exists"})
      })
      .catch(err =>{
        //console.log('User.js create user error: ', err);
        return res.status(422).json(err);
      });
  },

  findById: function(req, res) {
    db.Users
      .findById({where:{email: req.params.email}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //sign up
  create: function(req, res) {
    console.log('user signup');
    const { email, password } = req.body;
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({where:{ email: req.params.email }}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .destroy({where:{ email: req.params.email }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
