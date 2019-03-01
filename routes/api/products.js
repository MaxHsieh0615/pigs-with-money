// const router = require("express").Router();
const productsController = require('../../controllers/productsController');

module.exports = (app) =>{
  app.post('/api/CreateProduct',productsController.createProduct);
  app.get("/api/findAll", productsController.findAll);
  app.get("api/findbyid", productsController.findById);
  app.put("/api/updateProduct", productsController.update);
  app.delete("/api/removeProduct", productsController.remove);
}