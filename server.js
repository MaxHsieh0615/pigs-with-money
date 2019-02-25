const express = require("express");
const db = require("./models");
const passport = require('./passport');
const router = require('./routes/index')

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/"));
}
// Passport
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false, //required
  saveUninitialized: false //required
}));
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser


// Add routes, both API and view
require("./routes/api/user")(app);
require("./routes/api/job")(app);

// Starting the server, syncing our models ------------------------------------/
var syncOptions = { force: false };
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});