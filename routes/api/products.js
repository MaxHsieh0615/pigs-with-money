const productsController = require('../../controllers/productsController');

module.exports = (app) =>{
  // FIXME: /api/createProduct or /api/products
  app.post('/api/products',productsController.create);
  
  app.get("/api/products", productsController.findAllProducts);
  
  app.get("api/findbyid", productsController.findById);
  
  app.put("/api/buyProduct", productsController.buy);
  
  app.delete("/api/removeProduct", productsController.remove);

}
