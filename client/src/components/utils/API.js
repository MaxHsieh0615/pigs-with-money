import axios from "axios";

export default {
  // Gets all books
  //View tasks
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  //complete tasks router
  completeTask:{}, 
  updateTask:{},

  // Saves a book to the database
  //Submit task
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
