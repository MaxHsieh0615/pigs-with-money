const router = require("express").Router();
const jobsController = require('../../controllers/jobsController');
module.exports = (app) =>{
    app.post('/api/CreateJob',jobsController.create);
}
