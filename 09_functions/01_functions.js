/*  Functions: reusable block of clode designed to perform certain task 
    Functions are First-Class Citizens, Can be:
            - Assigned to variables
            - Passed as arguments
            - Returned from other functions
    Hoisting: means fun can be called before defined
*/

// function definition
function functionName(parameter1, parameter2) { return }
// functionName(argument1, argument2);  // function call


// fn with default parameter
function sayHi(name = "zaid alif"){
    console.log(`hi ${name}`);
}
sayHi("md"); // hi md
sayHi();     // hi zaid alif

// rest parameter: multiple parameter as a collection, must be the last args
function calculateCartPrice(p1, p2, ...price) {
    return price; 
}
console.log(calculateCartPrice(200, 400, 500, 600)); // [ 500, 600 ]


/* function expression: fe means creating a fun & assigning it to a variable
*/
let fun = function () { }

// closure : the ability of accessing paranet function variables inside child function in a nested function scenerio
 
/*  :: types of function
    1. arrow function or lambda function 
    2. callback function or argument function or anonymous function
    3. immideatly invocked function 
*/

(function aff() { }) //function expression
(function aff() { })() // iife (on function expression only)
    
