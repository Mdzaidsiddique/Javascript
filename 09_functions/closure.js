// // closure :: powerful 
// When a function is defined, it captures its surrounding environment in a closure. 
// This includes any local variables, parameters, and functions in its scope

function outerFunction(){
    let outerVaiable = "I am outer variable..";

    function innerFunction(){
        console.log("i am inner function with ", outerVaiable);
    }

    return innerFunction;
}

let myClosure = outerFunction()

myClosure();

// Practical Uses of Closures
// Creating Private Variables:
// Closures can be used to create private variables that cannot be accessed from outside the function.

function counter(){
    let count = 0;
    return function (){
        count+=1;
        return count;
    };
}

const counterr = counter()

console.log(counterr()); // 1
console.log(counterr()); // 2
console.log(counterr()); // 3

// Maintaining State in Asynchronous Operations:
// Closures are useful for maintaining state in asynchronous code, such as callbacks or event handlers.

function fetchData(url){
    let data = "some initial data"

    setTimeout(()=>{
        data = data + "+ fetch data from "+url
        console.log(data);
    }, 1000)
}

fetchData("http//www.clourse.api.com")

/*
Lexical Scoping: Closures are based on lexical scoping, meaning they capture variables from their surrounding scope at the time they are created.

Garbage Collection: Variables captured by closures are not garbage-collected as long as the closure is still reachable, preventing memory leaks.

Performance Considerations: Overusing closures can lead to excessive memory usage, as each closure maintains its own set of captured variables.
*/