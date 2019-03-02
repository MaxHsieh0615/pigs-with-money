import axios from "axios";

export default {
  // Gets all books
  //View tasks
  getCreateJob: function(jobData) {
    console.log(jobData);
    return axios.post("/api/createjob", jobData);
  },
  // Deletes the book with the given id
  deleteCreateJob: function(id) {
    return axios.delete("/api/createjobs/" + id);
  },

  //Submit task
  saveCreateJob: function(jobData) {
    return axios.post("/api/createjobs", jobData);
  },

  //Find All Jobs
  getAllJobs: function(){
    console.log("getAllJobs");
    return axios.get("/api/findAllByRequestor", {email:"jommoore2003@me.com"})
  },

  // TODO CHILD & CHILDREN Section

  getAddChild: function(childrenData) {
    return axios.post("/api/addchild", childrenData);
  },

  deleteAddChild: function(id) {
    return axios.delete("/api/addchild/" + id);
  },
  // Add Child
  saveAddChild: function(childrenData) {
    return axios.post("/api/addchild", childrenData);
  },

  //complete tasks router
  completeTask:{}, 
  updateTask:{},

};
