const piggyBanksController = require('../../controllers/piggyBanksController');

//what else do we need?
module.exports = (app) => {
  app.post('/api/findPiggyBankByChild',piggyBanksController.findPiggyBankByChild);
  app.get("/api/findPiggyBankByChild", piggyBanksController.findPiggyBankByChild);
  app.get("/api/findPiggyBankByPiggyBankID", piggyBanksController.findPiggyBankByPiggyBankID);
  app.put("/api/updatePiggyBankBalance", piggyBanksController.updatePiggyBankBalance);
};
