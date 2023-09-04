#!/usr/bin/node | chmod a+x 101-call_me_moby.js


function callMeMoby(x, theFunction) {
    if (typeof x === 'number' && typeof theFunction === 'function') {
      for (let i = 0; i < x; i++) {
        theFunction();
      }
    } else {
      console.error('Invalid arguments. Please provide a number and a function.');
    }
  }
  

module.exports = {callMeMoby};
