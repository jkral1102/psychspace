import axios from "axios";

export default {
  // ARTICLES 
  
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets article with a given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  updateArticle: function(id, data) {
    return axios.put("/api/articles/" + id, data);
  },
  // Deletes article with a given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Save article or comment to db
  saveArticle: function(data) {
    return axios.post("/api/articles", data);
  },
  // Save comment to db
  postComment: function(id, comment) {
    return axios.put("/api/articles/" + id,  {commentBody: comment});
  }


  //USERS

};
