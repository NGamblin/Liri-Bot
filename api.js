
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
      var jsonData = data.tracks.items;

      console.log("____________________" + "\n")
      var jsonData = data.tracks.items;
      for (i = 0; i < jsonData.length; i++) {
        console.log("____________________" + "\n")
        console.log("Song Name: " + data.tracks.items[i].name);
        console.log("Artist: " + data.tracks.items[i].artists[0].name);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("Preview: " + data.tracks.items[i].preview_url);
      }
    });
  };

  this.movieSearch = function (searchTerm) {
    var URL = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy"
    axios.get(URL).then(function (response) {
      console.log("____________________" + "\n")
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("____________________" + "\n")
    })
  
}
}







module.exports = searchReq;