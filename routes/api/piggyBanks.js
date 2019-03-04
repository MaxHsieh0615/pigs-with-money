const piggyBanksController = require('../../controllers/piggyBanksController');


module.exports = (app) => {
  app.post('/api/findPiggyBankByChild',piggyBanksController.findPiggyBankByChild);
  app.get("/api/findPiggyBankByChild", piggyBanksController.findPiggyBankByChild);
  app.get("/api/findPiggyBankByPiggyBankID", piggyBanksController.findPiggyBankByPiggyBankID);
  app.put("/api/updatePiggyBankBalance", piggyBanksController.updatePiggyBankBalance);
}
