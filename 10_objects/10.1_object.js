/* objects in JavaScript is a collection of key–value pairs, 
    - where keys (called properties) are strings or symbols, 
    - values can be any data type (numbers, strings, arrays, functions, other objects, etc.)*/

// definition: object literals

const obj2 = { 
    name: "zaid",
    "fullName": "md zaid siddique",
    age: 18,
    location: "deoria",
    email: "z@gmail.com",
    isLogIn: false,
    lastLogInDays: ["Monday", "Saturday"],
    [mysymbol] : "mysim1" // way to declare sumbol (with type) as a key 
} 

// access
console.log(obj2.fullName); // dot notation
console.log(obj2["fullName"]); // square notation
console.log(obj2[mysymbol]); // way to access symbol type key

obj2.email = "zaid@mindfire.com"
obj2["isLogIn"] = true;

// Object.freeze(obj2) // lock the object for changes: no error but value will not propogate

obj2.email = "zaid@yahoo.com"
// console.log(obj2.email); //zaid@mindfire.com

let o1 = {
    "id" : 1,
    greetings: function () {
        console.log("greeting...");
    } 
}
// console.log(o1.greetings())

let o2 = {
    id : 1,
    user: {
        userId : 11,
        userName : "alif",
        userAddress: {
            locality: "lucknow",
            state: "U.P",
            nationality: function () {
                console.log(`I am ${o2.user.userName} from India`);
            }
        }
    }
}
console.log(o2.user.userAddress.nationality());

// check object properties
console.log("id" in o2);

// through constructor:: singleton
const object = Object.create
const obj1 = new Object();

const mysymbol = Symbol("key1")

// check ibject is empty or not 
let ob = {}
if(Object.keys(ob).length === 0) console.log("empty object");