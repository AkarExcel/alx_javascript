#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
const fs = require('fs');


request(url)
  .pipe(fs.createWriteStream(process.argv[3]));