// A constructor function is used with the new keyword to create objects.
// It uses the this keyword to set properties on the new object.

function Person(name, age){  // conatructor dont return 
    this.name = name,
    this.age = age,
    this.greet = () =>{
        console.log(`Hello world, My name is ${this.name} and i am ${this.age} year old`);
    }
   
}

let p1 = new Person('zaid alif', 24)

console.log(p1);

p1.greet()
