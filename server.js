const express = require("express");
const db = require("./models");
const passport = require('./passport');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
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
require("./routes/api/children")(app);
require("./routes/api/products")(app);
require("./routes/api/piggyBanks")(app);
// FIXME: store route




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