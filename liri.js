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
var pick ="";

var spotify = new Spotify(keys.spotify);

var pick = function(input, functionData){
switch(input){
case "movie-this":
    getMovie(functionData);
    break;

case "concert-this":
    getBand(functionData);
    break;

case "spotify-this-song":
    getSong(functionData);
    break;

case "do-what-it-says":
    doThis();
  break;

default:
console.log("{Please enter a command: concert-this, movie-this, spotify-this-song, do-what-it-says}");

}
}

var run = function(argOne, argTwo){
  pick(argOne, argTwo);
}
run(process.argv[2], process.argv[3]);

function getMovie(){
  if(movieName){
    movieName = movieName
  }else{
    movieName ="Mr Nobody";
  }
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
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
   });
   
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


function getSong(song){
if(song){
  song = song
}else{
  song ='The Sign Ace of Base'
}

spotify.search({ type: 'track', query: song }, function(err, data) {
  console.log("=====================================");
  console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
  console.log("Song Name: " + data.tracks.items[0].name); 
  console.log("Preview Song Here: " + data.tracks.items[0].preview_url); 
  console.log("Album Name: " + data.tracks.items[0].album.name); 
  console.log("=====================================");
    

fs.appendFile("log.txt", "Artist: " +data.tracks.items[0].artists[0].name, function(err) {
  
});
fs.appendFile("log.txt", "SongName: " + data.tracks.items[0].name, function(err) {
 
});
fs.appendFile("log.txt", "Preview Song Url: " + data.tracks.items[0].preview_url, function(err) {
 
});
fs.appendFile("log.txt", "Album Name: " + data.tracks.items[0].album.name, function(err) {
 
});

});

}

function doThis(){
fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) throw error;
    var dataArray = data.split (',');
       for (let i = 0; i < dataArray.length; i=i+2) {
      //   console.log(dataArray[i], dataArray[i+1])
        pick(dataArray[i], dataArray[i+1]);
         
       }
}); 

}





