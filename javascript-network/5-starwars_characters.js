const request = require('request');

// Specify the Movie ID as a command-line argument.
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a Movie ID as a command-line argument (e.g., 3 for "Return of the Jedi").');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Make an HTTP GET request to fetch movie data.
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response.
    const movieData = JSON.parse(body);

    // Print the movie title.
    // console.log(`Characters in ${movieData.title}:`);

    // Fetch and print character names.
    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  }
});
