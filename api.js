
//read and set any env variables to dotenv
require("dotenv").config();

var axios = require("axios");
var moment = require('moment');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");



var searchReq = function () {

  this.searchConcerts = function (artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(URL).then(function (response) {

      var jsonData = response.data;

      console.log("Upcoming shows for " + artist + ":" + "\n")

      for (i = 0; i < jsonData.length; i++) {

        var performanceTime = response.data[i].datetime;
        performanceTime = moment(performanceTime).format("MM/DD/YYYY");

        console.log("____________________" + "\n")
        console.log("Lineup: " + response.data[i].lineup.join(", "))
        console.log("Venue: " + response.data[i].venue.name + " " + response.data[i].venue.city)
        console.log("Location: " + response.data[i].venue.city + " " + response.data[i].venue.region)
        console.log("Performance Date: " + performanceTime)
      }
    })
  };

  this.spotifySearch = function (searchTerm) {
    spotify.search({ type: 'track', query: searchTerm, limit: 5 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("____________________" + "\n")
      var jsonData = data.tracks.items;
      // console.log(jsonData)
      console.log("Songs matching: " + searchTerm + "\n")
    

      for (i = 0; i < jsonData.length; i++) {
      console.log("____________________" + "\n")
      console.log("Song Name: " + data.tracks.items[i].name);
      console.log("Artist: " + data.tracks.items[i].artists[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Preview: " + data.tracks.items[i].preview_url);
    }
    });
  };
};





module.exports = searchReq;