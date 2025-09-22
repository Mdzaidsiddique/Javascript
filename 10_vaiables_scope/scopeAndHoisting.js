//Scope

{
    "this is called scope"
}

// Local/block scope, Global scope and function scope

// Global scope
let a = 100;
const b = 2000;
if (true) {
    // block scope
    let a = 0;
    const b = 10;
    var s = 0.5;
}

function multiply (a, b) {
    var result = a * b;  // function scope
    return result
}

//local scope have a access to global scope but viceversa is not true

console.log(a);
console.log(b);
console.log(s);

/* var variables are 'function scope. ' What does this mean? It means they are only available inside the function they're created in, or if not created inside a function, they are 'globally scoped. */


