const db = require("../models")
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  {
    usernameField: "email" // not necessary, DEFAULT
  },
  
  function(username, password, done) {
	db.Users.findOne({ where: {email: username} }).then((user) => {
	if (!user) {
	  return done(null, false, { message: "Incorrect username" });
	}
	if (!user.validPassword(password)) {
	  return done(null, false, { message: "Incorrect password" });
	}
	  return done(null, user);
	}).catch(err => done(err));
  }
)

module.exports = strategy;
