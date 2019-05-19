var concertEvents = require("./api");

// Create a new searchConcerts object
var concertEvents = new concertEvents();

// Grab search commanodnd line argument
var searchCmd = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// Print whether searching for a show or actor, print the term as well
if (searchCmd === "concert-this") {
  console.log("Searching for Concerts..."+"\n");
  concertEvents.searchConcerts(term);
} else {
  console.log("POOOOOOOP");
}

