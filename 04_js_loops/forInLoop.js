// processed over
// mainly return keys or indexes

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (key in myObject) {
    console.log(`${key} is associated with ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (index in programming) {
    console.log(programming[index]);
}

// const map = new Map()  
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // not output, no error
// }