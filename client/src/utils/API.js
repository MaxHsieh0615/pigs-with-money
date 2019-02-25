import axios from "axios";

export default {
  // Gets all books
  //View tasks
  getCreateJob: function() {
    return axios.post("/api/api/CreateJob");
  },
  // Deletes the book with the given id
  deleteCreateJob: function(id) {
    return axios.delete("/api/createjobs/" + id);
  },
  //complete tasks router
  completeTask:{}, 
  updateTask:{},

  // Saves a book to the database
  //Submit task
  saveCreateJob: function(jobData) {
    return axios.post("/api/createjobs", jobData);
  }
};
