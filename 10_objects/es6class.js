// With ES6, JavaScript introduced the class syntax which provides a cleaner way to create constructor functions:

class Person{
    constructor(name, birthCity){
        this.name = name,
        this.birthCity = birthCity
    }

    greet = function (){
        console.log(`Hi, i am ${this.name} and i was born in ${this.birthCity}`);
    }
}

const person1 = new Person("zaid", "Deoria")

console.log(person1);

person1.greet()