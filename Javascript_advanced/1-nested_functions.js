// global scope variable
let globalVariable = 'Welcome';

// function that alert the content of  the global var
function outer() {
    let course = 'Holberton';
    function inner() {
        alert(`${globalVariable} ${course}`);
        let exclamation = '!';
        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`);
        }
        inception();
    }
    inner();
}
outer();