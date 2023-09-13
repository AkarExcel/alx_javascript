const req = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/';

const user = 'https://swapi-api.alx-tools.com/api/people/18/'

let lists = [];

req.get(url, (error, response, body) => {
    const results = JSON.parse(body);
    results.results.forEach(element => {
        // lists.push(element.characters.filter(new_char => new_char === user));
        lists.push(element.characters);
    });
    // console.log(lists);
    const nw_list = [];
    lists.forEach((people) => {
        people.forEach((person) =>{
            // console.log(person)
            if(person === user){
                nw_list.push(person)
            };
        })
    });

    console.log(nw_list.length)
});
