/* 
string : set of characters, immutable
String is a primitive data type in js .i.e.it is use stack memory not heap
*/

let name = "Khan"
let nationality = "Indian"

// string creation
let as = String("zaid")

let strTemp = `welcome  Mr ${name} to ${nationality}`
console.log(typeof strTemp);

// template litrals and String interpolation
console.log(`My Name is ${name} and i am from ${nationality}`);

let str = new String("zaid"); // reserved space in heap area, new -> constructor call
let str1 = "alif";            // stack memory

// string concatination
let string1 = str + str1; 
console.log(str.concat(str1));

let num = 240000;
let numString = num.toString()
console.log(numString, typeof (numString));

// toLocaleString() : Language Sensitive
console.log(num.toLocaleString("en-IN"), typeof(num.toLocaleString()));

const firstName = "Zaid"
// toUpperCase() & toLowerCase()
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase());

// charAt() & at()
console.log(firstName.charAt(0), firstName.charAt(0));

// indexOf() & lastIndexOf()
console.log(firstName.indexOf('a'), firstName.lastIndexOf('a'))

const lastName = "Siddique";

// slice()
console.log(lastName.slice(0, 3)); //Sid

//charCodeAt()
console.log(lastName.charCodeAt(1)); //return unicode value

//split()
const fullName = "Md Zaid Siddique"
console.log(fullName.split(" ")) //split basic of given parameter and return Array object 

let string2 = "   string  "
console.log(string2.trim()); //remove whitespaces from both ends & '\n' character
console.log(string2.trimStart()); //remove leading whitespaces & line terminator character
console.log(string2.trimEnd()); //remove tailing whitespaces & line terminator character

//substring(start, ends) : end => excluded
let string3 = new String("zaid alif")
console.log(string3.substring(2, 5)); //return substring from start to end-1

//substr(start, length)
console.log(string3.substr(2, 5)); //return substring from start ot length

console.log(string3.valueOf()) //return primitive value of the specified object

const fullNamew = "Md Zaid Siddique"

// replace(pattern, replacement)
let replacedString = fullNamew.replace("d", "-") //find 1st occurance and replce
console.log(replacedString); //in case of "" add to start
