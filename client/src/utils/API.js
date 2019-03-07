import axios from "axios";

export default {
  //View tasks
  getCreateJob: function(jobData) {
    return axios.post("/api/createjob", jobData);
  },

  //Submit task
  saveCreateJob: function(jobData) {
    return axios.post("/api/createjobs", jobData);
  },

  // TODO: Delete Job

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

  // Shop section


  // submit product
  createProduct: function(productData) {
    return axios.post("/api/products", productData);
  },

  // view all products
  getAllProducts: function() {
    return axios.get("/api/products");
  },

  // delete product
  deleteProduct: function(id) {
    return axios.delete("/api/products" + id);
  },

  //complete tasks router
  completeTask: {},
  updateTask: {}
};
