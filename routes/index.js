var express = require("express");
var mongoose = require("mongoose");
var Note = require("../models/Note");
var request = require("request");
var Router = express.Router();
var cheerio = require("cheerio");
var userLat = "";
var userLong = "";
var ao = "Atlas Obscura";

Router.get("/", function(req, res){
  Destination.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("index",{found : found});
    }
  });
});

//search
Router.get("/test", function(req,res) {

});

//search - Atlas Obscura
Router.get("/ao", function(req,res) {
  scrape()
  .then( function() {

  });
});

module.exports = Router;

// Scrape selected websites for articles and add them to MongoDB
function scrape() {

  //Scraping Atlas Obscura
  request("http://www.atlasobscura.com/search?utf8=%E2%9C%93&lat="+userLat+"&lng="+userLong+"&q=&formatted_address=&source=desktop&nearby=false", function(error, response, html) {

    var $ = cheerio.load(html);
    // The content we need is located within div.td-module-thumb
    $("a.content-card").each(function(i, element) {

      var result = {};

      result.title = $(this).children("a").children("div.search-list-item-details").children("h6").children("span").text(); // CAn't recall if this is exact
      result.link = $(this).attr("href");
      result.location = $(this).children("div.search-list-item-details").children("div.place-card-location").text();
      result.imgUrl = $(this).children("div").children("img").attr("src");
      result.source = ao;
      result.dateAdded = Date.now();

      var entry = new Destination(result);

      // Saving this instance of the Article model with
      //  scraped article title and url to the db
        if (err) {
          console.log("error with AO scrape: ", err);
        }
        else {
          console.log("AO Scrape worked");
        }
    });
  });
  // Tell the browser that we finished scraping the text
  console.log("AO Scrape Complete");
};
