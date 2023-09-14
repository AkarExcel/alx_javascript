const req = require('request');

const apiUrl = `${process.argv[2]}`;

const characterId = 18; // Character ID for Wedge Antilles

// Make an HTTP GET request to fetch movie data.
req(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response.
    const movieData = JSON.parse(body);

    // Filter movies where Wedge Antilles appears.
    const moviesWithWedgeAntilles = movieData.results.filter((movie) => {
      return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });

    // Print the number of movies where Wedge Antilles is present.
    console.log(`${moviesWithWedgeAntilles.length}`);
  }
});
