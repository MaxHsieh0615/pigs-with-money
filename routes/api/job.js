// const router = require("express").Router();
const jobsController = require('../../controllers/jobsController');

module.exports = (app) =>{
  app.post('/api/createJob',jobsController.createJob);
  app.get("/api/findAllByRequestor", jobsController.findAllByRequestor);
  app.get("/api/findAllByAssignedTo", jobsController.findAllByAssignedTo);
  app.get("api/findById", jobsController.findById);
  app.put("/api/upDateJob", jobsController.update);
  app.put("/api/completeJob", jobsController.complete);
  app.delete("/api/removeJob", jobsController.remove);
}
