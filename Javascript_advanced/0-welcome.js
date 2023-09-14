// function with inner function call
function welcome(firstName, lastName) {
    // set fullname = first and last name
    let fullName = `${firstName} ${lastName}`;

    // define a funtion for full name display
    function displayFullName(){

        // display an alert of full name
        alert(`Welcome ${fullName}!`);
    }
    // call the display function
    displayFullName();
}