/* function expression:
    - when a function is defined inside an expression (usually assigned to a variable).
    - it is not hoisted (must be defined before use)*/

// (1) annonymous function expression (// no name after function)
const add = function(par1, par2){
    return par1+par2;
};

res = add(2,5);
console.log(res)

// (2) named function expression: useful in recursion or debugging etc
const multiply = function mult(num1, num2){
    return num1*num2;
};

// const result = mult(2,5) //ReferenceError: mult is not defined
const result = multiply(2,5) 
console.log(result)

// (3) Arrow function expression: shorter syntax, introduced in ES6
const multiplication = (num1, num2) => num1*num2;
console.log(multiplication(4,5))

// (4) Immidiatly Invocked Function Expression (IIFE)
(function sayHi() {
    console.log("Hi, Greetings of the day...");
})();