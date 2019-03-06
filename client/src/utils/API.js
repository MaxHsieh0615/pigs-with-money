import axios from "axios";

export default {
  // Gets all books
  //View tasks
  getCreateJob: function(jobData) {
    return axios.post("/api/createjob", jobData);
  },

  //Submit task
  saveCreateJob: function(jobData) {
    return axios.post("/api/createjobs", jobData);
  },

  // TODO CHILD & CHILDREN Section

  getAddChild: function(childrenData) {
    return axios.post("/api/addchild", childrenData);
  },

  deleteAddChild: function(id) {
    return axios.delete("/api/removeChild/" + id);
  },
  // Add Child
  saveAddChild: function(childrenData) {
    return axios.post("/api/addchild", childrenData);
  },

  findAllByChild: function() {
    return axios.get("/api/findAllByChild");
  },

  getAllJobs: function() {
    return axios.get("/api/getAllJobs");
  },
  //complete tasks router
  completeTask: {},
  updateTask: {}
};
