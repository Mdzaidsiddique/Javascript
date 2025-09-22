/* higher-order function is a function that does at least one of the following:
    - Takes another function as an argument (callback)
    - Returns a function as its result
This is possible because in JavaScript, functions are first-class citizens (they can be stored in variables, passed around, and returned).
ex: map, filter, reduce, forEach, sort */

// (1) another fn as an args
function greet(name) {
  return "Hello, " + name;
}

function higherOrder(fn, value) {
  return fn(value); // calling the passed function
}

console.log(higherOrder(greet, "Zaid")); // Hello, Zaid

// (2) return fn in result
function higherOrder2(){
    return function sayHi(name){
        console.log(`Hi ${name}`);
    }
}

let greeti = higherOrder2()
greeti("zaid alif siddique")