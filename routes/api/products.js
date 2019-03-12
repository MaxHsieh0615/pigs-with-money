const productsController = require('../../controllers/productsController');

module.exports = (app) =>{
  // FIXME: /api/createProduct or /api/products
  app.post('/api/products',productsController.create);
  
  app.get("/api/products", productsController.getAllProducts);
  
  app.get("api/findbyid", productsController.findById);
  
  app.put("/api/updateProduct", productsController.update);
  
  app.delete("/api/removeProduct", productsController.remove);

}
