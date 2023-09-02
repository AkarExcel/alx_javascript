#!/usr/bin/node


function addMeMaybe(number, theFunction) {
    if (typeof number === 'number' && typeof theFunction === 'function') {
      // Increment the number by 1.
      number++;
  
      // Call the provided function with the incremented number as an argument.
      theFunction(number);
    } else {
      console.error('Invalid arguments. Please provide a number and a function.');
    }
  }
