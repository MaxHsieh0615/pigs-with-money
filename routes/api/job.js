const jobsController = require("../../controllers/jobsController");

module.exports = (app) =>{
  app.post("/api/createJob",jobsController.createJob);

  app.get("/api/findAllByRequestor", jobsController.findAllByRequestor);
  
  app.get("/api/findAllByAssignedTo", jobsController.findAllByAssignedTo);
  
  app.get("/api/findById", jobsController.findById);
  
  app.get("/api/getAllJobs",jobsController.getJobs);
  
  app.put("/api/updateJob", jobsController.update);
  
  app.put("/api/completeJob", jobsController.complete);
  
  app.delete("/api/removeJob", jobsController.remove);

  app.put("/api/assignJob", jobsController.assignJob);
  
}
