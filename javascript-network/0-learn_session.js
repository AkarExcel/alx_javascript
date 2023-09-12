// declare the request module
const req = require('request');

// call the process
const id = process.argv[2];

// creat a uri to the api
// const url = `https://swapi.dev/api/people/${id}`;
const url = 'https://swapi.dev/api/films/';

const parts = [];

// get a json string from the api
req.get(url, {encoding: 'utf-8'})
    // get the data by part
    .on('data', data => {
        parts.push(data);
    })
    // get the complete data
    .on('complete', () => {
        // convert the data into object
        const resp = JSON.parse(parts);
        // loop through the data object and collect the title
        resp.results.forEach(films => {
            console.log(films.title);
        });
    })
    // get the data status response
    .on('response', responce => {
        console.log('Status code :', responce.statusCode);
    })
    // get error 
    .on('error', err=> {
         console.log(err);
    })


