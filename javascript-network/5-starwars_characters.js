#!/usr/bin/node

const request = require('request');

const movie_id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movie_id}`
 

request.get(url, (error,response, body) => {
    if(!error && response.statusCode === 200) {
        const films = JSON.parse(body);
        films.characters.forEach((film)=>{
            request.get(film, (error,response,body)=>{
                const people = JSON.parse(body).name;
                console.log(people);
            })
        })
    }
})