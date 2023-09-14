# JavaScript - Advanced

## General
    Learning ObjectivesWhat is lexical scoping in Javascript
    What is closure in Javascript
    How to use closure
    How to chain different closures
    How to simulate private methods with Closure
    The execution stack order with Javascript
    How to use binding
    How to use callbacks

# ALL TASK

## Task 0
###  Lexical scoping and welcome message
Create a function named welcome:

    - It takes two arguments: firstName (string) and lastName (string)
    - It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
    - Within the welcome function, write a function named displayFullName:
        - It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.
    - Call the function displayFullName at the end of the function welcomee var

File: 0-welcome.js

## Task 1
###   Closure Scope Chain
    - Create a variable named globalVariable with value Welcome
    - Create a function outer that:
        - alerts the content of the variable globalVariable
        - creates a variable named course with value Holberton
        - creates a function inner that:
            - alerts the content of the variable globalVariable and course (concatenated)
            - creates a variable named exclamation with value !
            - creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
            - calls the function inception
        - calls the function inner
    - Call the function outer

File: 1-nested_functions.js

## Task 2
###  Closure
Write a function named welcomeMessage:

    - It accepts one argument fullName (string)
    - It should be a closure for an alert displaying Welcome <fullName>
    After this function definition, create three variables:

    - guillaume contains a call welcomeMessage with Guillaume as argument
    - alex contains a call welcomeMessage with Alex as argument
    - fred contains a call welcomeMessage with Fred as argument

File: 6-multi_languages_loop.js

## Task 3
###  Object
Update this script to replace the value 12 with 89:

    - You are not allowed to use var

example:
    const myObject = {
    type: 'object',
    value: 12
    };
    console.log(myObject);
    /*
    YOUR CODE HERE
    */
    console.log(myObject);

File: 12-object.js

## Task 4
###  Add file

Write a function that returns the addition of 2 integers.

    - The function must be visible from outside
    - The name of the function must be add
    - You are not allowed to use var

File: 13-add.js

#Advanced task

## Task 5
###  Const or not const

Write a file that modifies the value of myVar to 333

example:
    myVar = 89;
    require('./100-let_me_const')
    console.log(myVar);
    guillaume@ubuntu:~/$ ./100-main.js
    333
File: 100-let_me_const.js

## Task 6
###  Call me Moby
Write a function that executes x times a function.

    - The function must be visible from outside
    - Prototype: function (x, theFunction)
    - You are not allowed to use var

example:
    const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;
    addMeMaybe(4, function (nb) {
    console.log('New value: ' + nb);
    });

File: 101-call_me_moby.js

## Task 8
###  Increment object
Update this script by adding a new function incr that increments the integer value.

    - You are not allowed to use var

example:
    const myObject = {
    type: 'object',
    value: 12
    };
    console.log(myObject);
    /*
    YOUR CODE HERE
    */
    myObject.incr();
    console.log(myObject);
    myObject.incr();
    console.log(myObject);
    myObject.incr();
    console.log(myObject);

File: 103-object_fct.js
