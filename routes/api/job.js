// const router = require("express").Router();
const jobsController = require('../../controllers/jobsController');

module.exports = (app) =>{
    app.post('/api/CreateJob',jobsController.create);
    app.get("/api/findAllByRequestor", jobsController.findAllByRequestor);
    app.get("/api/findAllByAssignedTo", jobsController.findAllByAssignedTo);
    app.get("api/findbyid", jobsController.findById);
    app.put("/api/updatejob", jobsController.update);
    app.put("/api/completejob", jobsController.complete);
    app.delete("/api/removejob", jobsController.remove);
}



// router.route("/api/CreateJob")
// .post(jobsController.create);

// router.route("/viewjobs")
// .get(jobsController.findAllByRequestor)
// .post(jobsController.create);

// router.route("/:id")
// .get(jobsController.findById)
// .put(jobsController.update)
// .delete(jobsController.remove);

