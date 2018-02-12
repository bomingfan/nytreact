const axios = require("axios");


// findAll searches the NYT API and returns only the entries we haven't already saved
module.exports = {
  findAll: function(req, res) {
    const params = Object.assign(
      { api_key: "a020eb78a56f44a4a3afc92c5f11daab" },
      req.query
    );
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params
      }).then(articles => res.json(articles))
        .catch(err => res.status(422).json(err));
      }};