LiriBot Homework

Instructions: 
*Make it so liri.js can take in one of the following commands: 
-concert-this-- got this done with the Bands in Town API 
-spotify-this-song-- got this done with the Spotify API(the keys are in the env file which is in .gitignore) 
-movie-this-- got this done with the OMDB movie API, still tricky when you type in one movie and the result is another one that may contain the same name. 
-do-what-it-says-- reads the input from the random.txt file and reads that input into the console.

What Each Command Should Do node liri.js concert-this <artist/band name here>
Should list the following: 
-Name of the venue 
-Venue location 
-Date of the Event (use moment to format this as "MM/DD/YYYY")

Screenshot of concert-this: https://user-images.githubusercontent.com/24796624/49693266-f2cd8e80-fb3b-11e8-9800-f4a2ec776b32.png


node liri.js spotify-this-song '' Should show the following information about the song in your terminal/bash window: 
-Artist(s) 
-The song's name 
-A preview link of the song from Spotify 
-The album that the song is from 

Screenshot of spotify-this-song w/song: https://user-images.githubusercontent.com/24796624/49693336-be5ad200-fb3d-11e8-8d12-19dd1162495c.png

**If no song is provided then your program will default to "The Sign" by Ace of Base. Screenshot of no song default for spotify-this-song: https://user-images.githubusercontent.com/24796624/49693327-750a8280-fb3d-11e8-9cec-1e685847de49.png


node liri.js movie-this '' Should output the following information to your terminal/bash window:
-Title of the movie.
-Year the movie came out.
-IMDB Rating of the movie.
-Rotten Tomatoes Rating of the movie.
-Country where the movie was produced.
-Language of the movie.
-Plot of the movie.
-Actors in the movie. 

Screenshot of movie-this with movie input: https://user-images.githubusercontent.com/24796624/49693345-00841380-fb3e-11e8-9f06-c19284a2112b.png

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 
Screenshot of movie-this with no input: https://user-images.githubusercontent.com/24796624/49693344-e9452600-fb3d-11e8-958d-8c62d3a9e284.png

node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.

Screenshot of do-what-it-says: <img width="1202" alt="screen shot 2018-12-14 at 7 58 52 pm" src="https://user-images.githubusercontent.com/24796624/50037070-e9c93b00-ffdb-11e8-8b82-ee9b9276cb82.png">



BONUS
In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
Make sure you append each command you run to the log.txt file.
Do not overwrite your file each time you run a command.
Screenshot for logs of spotify-this-song command: <img width="1182" alt="screen shot 2018-12-08 at 11 43 36 pm" src="https://user-images.githubusercontent.com/24796624/49693512-2364f680-fb43-11e8-9723-28642a9422f3.png">




