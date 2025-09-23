/* hoisting: 
    - default behavior in JavaScript where declarations of variables and functions are moved 
    to the top of their respective scopes during the compilation phase*/

/*
How Hoisting Works?
- Memory Creation Phase (Hoisting)
    - var variables → allocated memory and set to undefined.
    - let & const → allocated memory but kept uninitialized (TDZ applies).
    - Function declarations → stored fully (you can call them before they’re written).
- Execution Phase
    - Code is executed line by line.
    - Variable assignments happen here*/

fun() // possible because of hoisting
function fun(){
    console.log("inside function fun");
}

console.log(a); //undefined
var a=10

console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 10; 

/* explaination: 
    varibale declared with var are hoisted (moved to the top of their scope)
    - During hoisting: The declaration (var a) is lifted.
    - But the initialization (a = 10) stays where it is.

    variables declared with let (and const) are also hoisted,
    - but they are not given a default value (undefined).
    - they remain in a special zone called the Temporal Dead Zone (TDZ) until the line where they are initialized.
    - Accessing them before initialization → ReferenceError.
*/

f1() // TypeError: f1 is not a function
var f1 = function(){
    console.log("inside fn expression");
}
f1() // inside fn expression

/* temporal dead zone (tdz): 
    - refers to the period of time during which a variable is in scope but not yet declare.
    - this concept primarily applies to variable declare with let and const*/
{ 
    // TDZ starts here
    // console.log(x); //Reference Error :: because of TDZ
    let x;
    console.log(x); // undefined
    x = 5; // TDZ ends here
    console.log(x);
}
