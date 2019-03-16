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

  createChild: function(childrenData) {
    return axios.post("/api/createChild", childrenData);
  },

  //parameter: String
  removeChild: function(childrenData) {
    return axios.delete(`/api/removeChild/${childrenData}`);
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

  showAllTransactions: function(id) {
    return axios.get("/api/showAllTransactions/"+id);
  },

  // Shop section

  assignJob: function(jobData){
    return axios.put("api/assignJob",jobData);
  },

  completeJob: function(jobData){
    return axios.put("api/completeJob",jobData);
  },
  // Shop section
  // submit product
  createProduct: function(productData){
    return axios.post("/api/products", productData);
  },

  buyProduct: function(productData){
    return axios.put("/api/buyProduct",productData);
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
