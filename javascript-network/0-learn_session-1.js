// declare the request module
const req = require('request');

const fs = require('fs');

// call the process
const id = process.argv[2];

// creat a uri to the api
// const url = `https://swapi.dev/api/people/${id}`;
const url = 'https://swapi.dev/api/films/';


const parts = [];

// get a json string from the api
req.get(url).pipe(fs.createWriteStream('response.json'))