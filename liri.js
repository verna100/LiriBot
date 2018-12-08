require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require ("fs");
var moment = require('moment');
// // Grab the movieName which will always be the third node argument.
var input = process.argv[2];
var movieName = process.argv[3];
var artist = process.argv[3];
var song = process.argv[3];



switch(input){
case "movie-this":
    getMovie();
    break;

case "concert-this":
    getBand();
    break;

case "spotify-this-song":
    break;

case "do-what-it-says":
  // fs.readfile;
  break;
// break;

default:
console.log("{Please enter a command: concert-this, movie-this, spotify-this-song, do-what-it-says}");

}

function getMovie(){
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
   if (movieName === undefined || movieName === " "){
       movieName = "Mr/. Nobody";
      console.log("=====================================");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
      console.log("It's on Netflix!");
      console.log("=====================================");
   }else{
      console.log("=====================================");
      console.log("Movie Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("=====================================");
   }
})
};

function getBand(){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
      function(reply) {
    console.log("=====================================");
    console.log("Name of Artist: " + artist);
    console.log("Venue: " + reply.data[0].venue.name);
    console.log("Venue Location: " + reply.data[0].venue.city + ", " + reply.data[0].venue.country);
    var dateTime = reply.data[0].datetime;
    dateTime = moment(dateTime).format("MM DD YYYY");
    console.log("Date: " + dateTime );    
    console.log("=====================================");
      });
      fs.appendFile("log.txt", artist, function(err) {

      });
};

// getBand();

// song = "The Sign Ace of Base"; 
var spotify = new Spotify(keys.spotify);

// can't get the Sign to default????
spotify.search({ type: 'track', query: song }, function(err, data) {
  if (song === undefined || song === " ") {
    song = "The Sign Ace of Base"; 
    console.log('Help Me: ' + song);
  } else {
  console.log("=====================================");
  console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
  console.log("Song Name: " + data.tracks.items[0].name); 
  console.log("Preview Song Here: " + data.tracks.items[0].preview_url); 
  console.log("Album Name: " + data.tracks.items[0].album.name); 
  console.log("=====================================");
  // console.log(data.tracks.items[0]); 
  // console.log(err);
  };


fs.appendFile("log.txt", data.tracks.items[0].artists[0].name, function(err) {

});
fs.appendFile("log.txt", ", " + data.tracks.items[0].name, function(err) {
 
});
fs.appendFile("log.txt", ", " + data.tracks.items[0].preview_url, function(err) {
 
});
fs.appendFile("log.txt", ", " + data.tracks.items[0].album.name, function(err) {
 
});

});


fs.readFile("random.txt", "utf8", function(error, data) {
  
  if (process.argv[3]==="do-what-this-says") {
     console.log(process.argv[2]+process.argv[3]);
  }
  console.log(data);

  // gotta figure out how to run this

});
