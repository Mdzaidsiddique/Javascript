const string = "Cover the earth, before it covers you";

// 1: split("seperator") :: convert to array basis of seperator provided
let arr1 = string.split();
console.log(arr1, typeof arr1);

let arr2 = string.split("");
console.log(arr2, typeof arr2);

let arr3 = string.split(" ");
console.log(arr3, typeof arr3);

// 2: Array.from() :: convert every character to element in an array
let arr4 = Array.from(string)
console.log(arr4, typeof arr4);

// 3: Spread Operator [...] :: convert every character to element in an array
let arr5 = [...string]
console.log(arr5, typeof arr5);