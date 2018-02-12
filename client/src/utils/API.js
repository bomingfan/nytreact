import axios from "axios";


export default {
    // Gets all articles
    getArticles: function(params) {
      return axios.get("/api/articles", params);
    },
    // Gets the saved articles
    getSavedArticles: function() {
      return axios.get("/api/savedArticles");
    },
    // Deletes the article with id
    deleteArticle: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    // Saves an article to the database
    saveArticle: function(articleData) {
      return axios.post("/api/articles", articleData);
    }
  };