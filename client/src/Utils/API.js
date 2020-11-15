import axios from "axios";

const API = {
  getBooks: function () {
    return axios.get("/books");
  },
  searchForBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  deleteBooks: function (){
    return axios.delete("/api/books/:id")
  }
};

export default API;
// import axios from "axios";

// // Export an object containing methods we'll use for accessing the GitHub Jobs API

// export default {
//   searchTerms: function(query) {
//     return axios.get(
//       "https://www.googleapis.com/books/v1/volumes?q=search+termskey=AIzaSyCEcM224zRaqRswzYR99pFKqaVQ2l0wl5M+query"
//     );
//   }
// };


