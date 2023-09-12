#!/usr/bin/node

// import request module
const req = require('request');

// get id from terminal
url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

// get the request 
req(url, function(error, responce, body){
    console.log(error || JSON.parse(body).title);
});