# LiriBot
LiriBot Homework

Instructions:
Make it so liri.js can take in one of the following commands:
concert-this-- got this done with the Bands in Town API
spotify-this-song-- got this done with the Spotify API(the keys are in the env file which is in .gitignore)
movie-this-- got this done with the OMDB movie API, still tricky when you type in one movie and the result is another one that may contain the same name.
do-what-it-says--still trying to understand this command. all the above commands work in node as node liri.js respective command


What Each Command Should Do
node liri.js concert-this <artist/band name here>

Should list the following:
-Name of the venue
-Venue location
-Date of the Event (use moment to format this as "MM/DD/YYYY")


node liri.js spotify-this-song '<song name here>'
Shouls show the following information about the song in your terminal/bash window:
-Artist(s)
-The song's name
-A preview link of the song from Spotify
-The album that the song is from

**If no song is provided then your program will default to "The Sign" by Ace of Base.


node liri.js movie-this '<movie name here>'
Should output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!


node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.


BONUS
In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
Make sure you append each command you run to the log.txt file.
Do not overwrite your file each time you run a command.




