"use-strict" // enable strict mode of js

//Strict mode is a way to opt into a restricted variant of JavaScript, which aims to catch common coding mistakes and "unsafe" actions such as defining global variables.
// This can help developers write cleaner, more robust, and more efficient code.

// variable :: Variables are used to store data in JavaScript. assign with (=) 

var number = 5; //since start, function & global scoped, can be redeclared, mutable

let email = "z@gmail.com"; // ES6, blocked scoped, mutable

const name = "alif" // ES6, blocked scoped, immutable (constant)\

age = 34; // bad practice

let motherName; // undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([number, email, name, age, motherName]);