// these are the methods of function
// call: Calls a function with a specific this context and individual arguments.
// apply: Calls a function with a specific this context and arguments as an array.
// bind: Creates a new function with a specific this context and optionally preset arguments, to be called later.

let obj = {
    name : "zaid",
    age: 20
}

function sayHi(greet, punctuation){
    console.log(`${greet}, my name is ${this.name} ${punctuation}`);
}

sayHi.call(obj, "Good AfterNoon", ".")


// console.log(obj);

// apply: Calls a function with a specific this context and arguments as an array.

let obj2 = {
    name : 'Umair'
}
function sayGoodBye(greet, punctuation){
    console.log(`ok ${this.name}, it was nice meeting you, ${greet} ${punctuation}`);
}

sayGoodBye.apply(obj2, ["Goodbye", '!'])

// bind: Creates a new function with a specific this context and optionally preset arguments, to be called later.

let student = {
    name : "zaid",
    cousre : "js"
}
function heyGuys(greet){
    console.log(`${greet} i am ${this.name}`);
}

const heyGuysBind = heyGuys.bind(student, "goodmorning");

heyGuysBind()


