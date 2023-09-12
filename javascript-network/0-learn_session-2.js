// clone a website

const req = require('request');
const fs = require('fs');

req.get('https://intranet.alxswe.com')
    .pipe(fs.createWriteStream('intranet.html'));