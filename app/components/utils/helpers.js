var axios = require("axios");
var cloudinary = require('cloudinary');
var ebUrl = "https://www.eventbriteapi.com/v3/events/search/?q=",
    ebKey = "DQEAPTY3UNYTAS6MKA";
var cgUrl = "http://api.amp.active.com/camping/campgrounds/?landmarkLat=",
    cgKey = "RZM4ZZZJVUGSV6YURP88RAKY";
var yelpUrl = "https://api.yelp.com/v3/businesses/search?latitude=";
var yelpAuth = jwt({
                secret: "de9QQsmPFQsKJx5k7eLrW6lMPtGrSHdcuwqsHQYW1E9KTAIYBV7yZ3smjZ0fqfGT",
                audience: "BRsa74gA41xYqhsmwn3cWQ"});


var helper = {

  searchAPIs: function(userLocation) {
    return axios.all([
      axios.get(yelpUrl+userLocation.lat+"?longitude="+userLocation.long+"?categories=active"),
      axios.get(yelpUrl+userLocation.lat+"?longitude="+userLocation.long+"?categories=localflavor"),
      axios.get(yelpUrl+userLocation.lat+"?longitude="+userLocation.long+"?categories=nightlife"),
      // axios.get(cgUrl+userLocation.lat+"&landmarkLong="+userLocation.long+"&api_key="+cgKey);
      // axios.get(ebUrl+searchTerm+"/?token="+ebKey);
    ])
    .then(function(response) {
      console.log(response);
    })
  },

  formatResults: function(results) {

  }

};

module.exports = helper;

/*

  eventful api documentation http://api.eventful.com/docs/events/search

saveArticle: function(newArticle) {
    console.log("helpers.saveArticle - newArticle ", newArticle);
    return axios.post("/save/:id", {article:newArticle})
    .then(function(response){
      console.log("helpers.postArticle response id ", response._id);
      return response._id;
    })
  },

  saveNote: function(newNote) {
    return axios.post("/:id", { note:newNote });
  },

  getNotes: function() {
    return axios.get("/:id")
    .then(function(response){
      console.log("helpers.getNotes response from '/:id' get request ", response);
      return response;
    })
  },

  deleteNote: function(id) {
    return axios.post("/delete/"+id);
  }


*/
