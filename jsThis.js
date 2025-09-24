//  there are 6 rule to understand this in javascript

// Rule 1: if we simple execute a regular function without explisit or implisitely binind this to any object 
// then this will always points to global (window) object

function rule1(){
    console.log("Rule 1 : ", this); // this refers to global object
}

// rule1()


// Rule 2: implisit binding 
// if we implisit bind our object or use ibjectName.functionName() then this will points to object on it called

let obj = {
    name : "zaid",
    age : 16,
    greet : function(){
        console.log("greeting from rule 2", this); // this points to obj
    }
}

// obj.greet();

// Rule 3: Explitsit binding
// when a function is called using call() or apply() method then this will points to the value pass as a first
// argument of the call() or apply() method

let obj2 = {
    name : "alif",
    age : 10
}

function greetCall(){
    console.log("greeting from r3 call", this);
}

function greetApply(){
    console.log("greetings from r3 apply", this);
}

greetCall.call(obj2) // this --> obj2
greetApply.apply(obj2, obj) // this --> obj2


// Rule 4: bind()
// bind() create a new method hard bound to the specified object i.e. this points to specefied object

let objBind = {
    name : "xyz",
    score : 45
}

function rule5(){
    console.log("hello from bind rule 5", this); 
}

var bindRule5 = rule5.bind(objBind);
 
bindRule5() // this points to objBind


// Rule 5: new keyword
// when a function invoke with new keyword that will returns a brand new object and this will points to that newely created object

function Person(name, age){
    this.name = name,
    this.age = age,

    this.sayhello = function(){
        console.log("hello", this.name, this);
    };
}

var zaid = new Person("md zaid siddique", 16)
var salman = new Person("Salman", 26)
 
zaid.sayhello() // here this will point to zaid
salman.sayhello() // this point to salman

// Rule 6: Arrow function
// in the arrow function this points where the body of arrow is, it will resolve lexically that means if body of arrow 
// not specify this then it will lexically resolve, to immidiate pared scope ..then parent... and if not found then 
// this will points to window or global object

// const sayHi = (name)=>{
//     console.log("Hi", name, this);
// }

let o = {
    name : "umair",
    sayArrowHello : ()=>{
        console.log("hello arrow", this);
    }
}

o.sayArrowHello()