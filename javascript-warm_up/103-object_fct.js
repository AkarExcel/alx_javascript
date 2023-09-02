#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  // Add the "incr" method to the "myObject" object.
  myObject.incr = function () {
    if (typeof this.value === 'number') {
      this.value++;
    }
  };
  