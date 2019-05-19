
//read and set any env variables to dotenv
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');


var concertEvents = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.searchConcerts = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(URL).then(function (response) {

      var jsonData = response.data;

      // console.log(jsonData)
      console.log("Upcoming shows for " + artist + ":" + "\n")

      for (i = 0; i < jsonData.length; i++) {

        var performanceTime = response.data[i].datetime;
        performanceTime = moment(performanceTime).format("MM/DD/YYYY");

        console.log("==============")
        console.log("Lineup: " + response.data[i].lineup.join(", "))
        console.log("Venue: " + response.data[i].venue.name + " " + response.data[i].venue.city)
        console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region)
        console.log("Performance Date: " + performanceTime)
      }
    });
  };
};

module.exports = concertEvents;