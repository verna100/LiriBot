require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require ("fs");
// // Grab the movieName which will always be the third node argument.
var input = process.argv[2];
var movieName = process.argv[3];
var artist = process.argv[3];
var songArtist = process.argv[3];
const items =[];
const bands = [];
var movie ='';



// console.log(artist);

// // Then run a request with axios to the OMDB API with the movie specified

switch(input){
case 'movie-this':
    getMovie();
    break;
case 'concert-this':
    getBand();
    break;
// case `spotify-this-song`:
//     Spotify();
//     break;
default:
console.log('what is happening');


}
   

// 
function getMovie(){
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
   if (movieName === ("")){
    //    movieName = "Mr/. Nobody";
    console.log("=====================================");
    console.log("If you haven't watched 'Mr/. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
    console.log("It's on Netflix!");
   }else{
  //   // push the information requested into the array
    items.push('=====================================');
    items.push(`Movie Title: ${response.data.Title}`);
    items.push(`Release Year: ${response.data.Year}`);
    items.push(`IMDB Rating: ${response.data.imdbRating}`);
    items.push(`Rotten Tomatoes Rating: ${response.data.tomatoRating}`);
    items.push(`Country: ${response.data.Country}`);
    items.push(`Language: ${response.data.Language}`);
    items.push(`Plot: ${response.data.Plot}`);
    items.push(`Actors: ${response.data.Actors}`);
  //   // print them out onto the terminal
    items.forEach(item => console.log(item));
//   console.log(response);
   }

})
};
// getMovie();


function getBand(){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
      function(reply) {
    bands.push('=====================================');
    bands.push(`Name of Artist: `+ artist);
    bands.push(`Name of Venue: ${reply.data[0].venue.name}`);
    bands.push(`Venue Location: ${reply.data[0].venue.country}`);
    bands.push(`Date and Time: ${reply.data[0].datetime}`);
//   //   // print them out onto the terminal
    // var dateTime = reply.data[0].datetime;
    // dateTime = moment(dateTime).format("dddd, MMMM Do YYYY, h:mm a");
    bands.forEach(band => console.log(band));
  // console.log(reply);
      });
};

// getBand();


// function spotifyThis(song){

// 	//If user has not specified a song , default to "Radioactive" imagine dragons
// 	if(song === ""){
// 		song = "Radioactive";
// 	}

// 	spotify.search({ type: 'track', query: song}, function(err, data) {
//     if (err) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

//     var song = data.tracks.items[0];
//     console.log("------Artists-----");
//     for(i=0; i<song.artists.length; i++){
//     	console.log(song.artists[i].name);
//     }

//     console.log("------Song Name-----");
//     console.log(song.name);

// 	console.log("-------Preview Link-----");
//     console.log(song.preview_url);

//     console.log("-------Album-----");
//     console.log(song.album.name);

// 	});
// }
  
//     axios.get("https://api.spotify.com/v1" + songArtist + "/artists/").then(
//     // song.search({ type: 'track', query: 'All the Small Things' })
//     (function(response) {
//       console.log(response);
//     })
//     .catch(function(err) {
//       console.log(err);
    
//     })
// //   });



