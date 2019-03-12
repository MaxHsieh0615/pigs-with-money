const childrenController = require("../../controllers/childrenController");

module.exports = (app) =>{
  app.post('/api/createChild',childrenController.create);

  app.get("/api/findAllByChild", childrenController.findAllByChild);
  
  app.delete("/api/removeChild/:id", childrenController.removeChild);

}
