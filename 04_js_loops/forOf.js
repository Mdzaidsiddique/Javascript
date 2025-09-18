// for of :: mainly returns values not index/keys
    // only work on iterable 

// ["", "", ""]
// [{}, {}, {}]

const arr = [9, 6, 3, 4, 5]

for (val of arr) {
    console.log(val);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

const map = new Map(); // :: no duplicates, preserve insertion order

map.set('name', "zaid")
map.set("role", "Software engineer")
map.set('country', 'India')

for (item of map) {
    console.log(item);
}

for ([key, vlaue] of map) { // decomposing map [key, value]
    console.log(`${key} is ${vlaue}`);
}



// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (elements of myObject) {
//     console.log(elements); // TypeError: myObject is not iterable
// }