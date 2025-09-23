let student1 = {};

student1["s1Id"] = 11;
student1.s1Name = "zaid";

student1.s1Roll = 101;

// delete properties
delete student1.s1Roll;

student1.s1Roll = 101;

console.log(student1);

let student2 = {
    "s2Id": 21,
    s2Name: "alif",
    s2Roll : 201
}

// :: merge object :: Object.assign(target{}, source{})

const student_ = { ...student1, ...student2 }
const student__ = Object.assign({}, student1, student2)
const student = Object.assign(student1, student2) //target object student1 is also changed.

// console.log(student, student === student1, student1);

// :: clone object :: Object.assign(target{}, source{})
let obj1 = { a: 11, b: 22 }
let obj2 = Object.assign({}, obj1)

console.log(obj1 == obj2); //true

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3); // modifications of obj3 won't be applicable on obj4
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }

console.log(Object.keys(student1)); // arrays of keys
console.log(Object.values(student1)); // array of values
console.log(Object.entries(student1)); // [[key & value], [key & value]...]
console.log(Object.hasOwnProperty("name"));

const user = {
    userId : 1,
    userName: "xyz",
    email : "x@gmail.com"
}

// :: object decomposition ::
const {userName, email, userId} = user;
const { userName : un} = user;

console.log(userName, un, email)