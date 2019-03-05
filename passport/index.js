const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const db = require('../models')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  db.Users.findOne(
	{where: id }).then(user => {
	  done(null, user);
	})
});

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
