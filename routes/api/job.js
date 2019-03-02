// const router = require("express").Router();
const jobsController = require('../../controllers/jobsController');

module.exports = (app) =>{
  app.post('/api/createJob',jobsController.createJob);
  app.get("/api/findAllByRequestor", jobsController.findAllByRequestor);
  app.get("/api/findAllByAssignedTo", jobsController.findAllByAssignedTo);
  app.get("api/findbyid", jobsController.findById);
  app.get("/api/getJobs",jobsController.getJobs);
  app.put("/api/updatejob", jobsController.update);
  app.put("/api/completejob", jobsController.complete);
  app.delete("/api/removejob", jobsController.remove);
  
}
