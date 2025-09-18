/* Primitive DataTypes :: predefined or in builts types 
There are 7 premitive datatype in javascript
[number, bigInt, null, undefined, string, boolean, Symbol]
*/

// 1:number (Range:: (-2^53-1 --> +2^53-1)) 
let num1 = 9, num2 = -12, num3 = 0, num4 = 0.5; //can hold decimal as well
let num5 = new Number(5) //Object type
console.log(num1, num2, num3, num4, num5);
console.log(typeof num1, typeof num2, typeof num3, typeof num4, typeof num5);

// 2: BigInt
let largeNumber = 76594657874892598569n;
console.log(largeNumber + "--" + typeof largeNumber);

// 3:string :: sequece of characters (""/'')
const str1 = "this is string";
const str2 = `this is also a string ${num3}`
const str3 = new String("string object") //Object type

console.log(str1 + "--" + typeof str1);
console.log(str2 + "--" + typeof str2);
console.log(str3 + "--" + typeof str3);

// 4:boolean :: true or false
let logIn = true;
let logOut = false;
let isUserActive = new Boolean(true); //Object type
console.log(logIn + "--" + typeof logIn);
console.log(logOut + "--" + typeof logOut);
console.log(isUserActive + "--" + typeof isUserActive);

// 5:undefined : if the properties is not defined/assigned then it is undefined
let prop1; 
console.log(prop1 + "--" + typeof prop1);

// 6:null :: standalone value
let nullValue1 = null;
let nullValue2 = new String(); //not a null
console.log(nullValue1 + "--" + typeof nullValue1);
console.log(nullValue2.valueOf() + "--" + typeof nullValue2);
console.log(null==nullValue2); //false

// 7:Symbol :: unique object : ES6
const symbol = Symbol("alif")
console.log(symbol, typeof symbol);

// Non-Premitive DataTypes (reference type) [Array, Object & function]
// 1:Array :: index based, collection of multiple elements (homogeniuos/hetrogenious) in a single variable

let arr1 = [1, 2, 3, "zaid"]; 
let arr2 = new Array(1, 2, "alif");

console.log(arr1, typeof (arr1));
console.log(arr2, typeof (arr2));

// 2:Object :: an entity having properties and methods.
// key - value pair, it is store values(homogeniuos / hetrogenious) associated with its keys in a sigle variable

let obj1 = {
    "name": "md",
    "age": 24,
    "passion":"coding and poetry"
}
let obj2 = new Object("Md")

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);

// 3: functions

const myFunction = function(){
    console.log("Hello world");
}

console.log(myFunction, typeof myFunction);