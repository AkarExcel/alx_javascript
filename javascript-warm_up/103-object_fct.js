#!/usr/bin/node | chmod a+x 103-object_fct.js

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
  
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);