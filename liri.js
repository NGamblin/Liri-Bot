var searchReq = require("./api");

var searchReq = new searchReq();

var searchCmd = process.argv[2];

var searchTerm = process.argv.slice(3).join(" ");

//call proper api func based on searchCmd
if (searchCmd === "concert-this") {

    console.log("Searching for Concerts..." + "\n");
    searchReq.searchConcerts(searchTerm);

} else if (searchCmd === "spotify-this-song") {

    console.log("Searching for Song..." + "\n");
    searchReq.spotifySearch(searchTerm)
}



