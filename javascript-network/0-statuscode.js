#!/usr/bin/node

// import request module
const req = require('request');

// get url from terminal
url = `${process.argv[2]}`;

// check the status code of Url
req.get(url)
    .on('response', response=>{
        console.log(`code: ${response.statusCode}`);
    })
