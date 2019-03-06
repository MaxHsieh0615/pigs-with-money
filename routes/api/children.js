const childrenController = require("../../controllers/childrenController");

module.exports = (app) =>{
  app.post('/api/addChild',childrenController.createChild);

  app.get("/api/findAllByChild", childrenController.findAllByChild);
  
  app.put("/api/updateChildBudget", childrenController.updateChildBudget);
  
  app.delete("/api/removeChild", childrenController.removeChild);

}
