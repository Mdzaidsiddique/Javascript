let arr1 = ['m','d',' ','z','a','i','d']

// 1: Object.assign([], string): 
let string1 = Object.assign([], arr1);
console.log(string1, string1.length);


// 2: dot join("")
let string2 = arr1.join("");   // join by ""
let string3 = arr1.join();     // join by ,
let string4 = arr1.join("-");  // join by -

console.table([string2, string3, string4]);
