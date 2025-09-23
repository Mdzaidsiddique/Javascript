// An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method. 
// All the properties which are created by simple assignment or property initializer are enumerable by default. 

let student = {
    name : "zaid",
    roll : 1,
    age : 24,
    mark : 89
}

console.log(student); // by default all properties are enumurable

// Object.defineProperty()
Object.defineProperty(student, 'mark', {
    value : 89,
    configurable : true,
    writable : false,
    enumerable : false
})

for(key in student){
    console.log(key);
}

console.log(student.propertyIsEnumerable('name'));

console.log(student.propertyIsEnumerable('mark'));