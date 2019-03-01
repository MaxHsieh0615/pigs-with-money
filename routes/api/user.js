const passport = require('../../passport');
const usersController = require('../../controllers/usersController');

module.exports = (app) =>{

  //sign up
  app.post('/user',usersController.findOrCreate);

  app.post(
    '/user/login',
    (req, res, next) =>{
      console.log('routes/user.js, login, req.body: ');
      next()
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user.email);
      req.session.username = req.body.username;
      
      var userInfo = {
        username: req.user.username
      };
      res.send(userInfo);
  });
  
  app.get('/user', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
      res.json({ user: req.user })
    } else {
      res.json({ user: null })
    }
    next();
  })

  app.post('/logout', (req, res) => {
    if (req.user) {
      req.logout()
      console.log("logging out")
      res.send({ msg: 'logging out' })
    } else {
      console.log("no user to log out")
      res.send({ msg: 'no user to log out' })
    }
  })
}
