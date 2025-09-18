// -=-=-=-=-=--=-String conversion-==-=-=-=-=-=-=

let a = NaN;
console.log(typeof a); //number

// 1: parseInt()
let string = "this is string and you have to convert this";
console.log(parseInt(string)); //NaN

let str = 'a';
console.log(parseInt(str), typeof parseInt(str)); // NaN number

let str2 = '100';
console.log(parseInt(str2), typeof parseInt(str2)); // 100 number

// 2: Number()
let age = 24;
let name = "zaid";

console.log(Number(age), typeof Number(age)); // 24 number
console.log(Number(name), typeof Number(name)); // NaN number

// 3: Unary Operator (+)
const number = '100';

console.log(+number + 1); // 101
console.log(+age, typeof (+age)); // 24 number
console.log(+name, typeof (+name)); // NaN number

// 4: parseFloat()

const decimalNumber = 104.45;
const convertedNumber = parseFloat(decimalNumber)
console.log(convertedNumber, typeof (convertedNumber)); // 104.45 number

// 5: Bitwise Operator

const numByBit1 = decimalNumber | 0;
const numByBit2 = decimalNumber >> 0;
console.log(numByBit1, typeof(numByBit1));  // 104 number
console.log(numByBit2, typeof (numByBit2));  // 104 number