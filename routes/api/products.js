const productsController = require('../../controllers/productsController');

module.exports = (app) =>{
  // FIXME: /api/createProduct or /api/products
  app.post('/api/products',productsController.createProduct);
  app.get("/api/findAll", productsController.findAll);
  
  app.get("api/findbyid", productsController.findById);
  
  app.put("/api/updateProduct", productsController.update);
  
  app.delete("/api/removeProduct", productsController.remove);

}
