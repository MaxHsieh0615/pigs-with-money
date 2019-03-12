const piggyBanksController = require("../../controllers/piggyBanksController");

module.exports = app => {
  
  app.get("/api/addFunds/:id", piggyBanksController.addFunds);

  app.get("/api/deductFunds/:id", piggyBanksController.deductFunds);

  app.get("/api/showAllTransactions", piggyBanksController.showAllTransactions);

};
