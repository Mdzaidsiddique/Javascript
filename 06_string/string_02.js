// =-=-=--=-=-=-=STRING COMPARISON-=-=-=-=-=-=-=

const firstName = "zaid"
const middleName = "alif"
const lastName = "siddique"

let str = "zaid"

console.log(firstName == str); //compare only value
console.log(firstName === middleName); //compare value and datatype both


// localeCompare() : compare check with against alphabatically & return 0 or 1 or -1
// "check".localeCompare("against");
console.log(firstName.localeCompare(str));

// The letter "a" is before "c" yielding a negative value
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

console.log("baa".localeCompare("baa"));  //0

// comparing case insensitive strings
let str1 = "Hello This IS ZAID"
let str2 = "heLLo this is zaid"

console.log(str1 == str2); //false
console.log(str1.toLowerCase() == str2.toLowerCase()); //true

let str3 = new String("Hello, This IS ZAID")
let str4 = new String("heLLo this is zaid")

// in javascript "" is primitive and new String("") is object
console.log(str3.toLowerCase() == str4.toLowerCase()); //false
console.log(str3.toUpperCase() == str4.toUpperCase()); //false


// replace(pattern, replacement)
let finalString = (str3.replace("Hello", "Hi"))

//replaceAll(pattern, replacement) // find match and replace at every places
let finalString2 = str3.replaceAll(" ", "-")
console.log(finalString2)


/*

Object.assign([], string): It returns an array by assigning string characters to it.
To convert the character array to the string we use 

s.join(“”):  It returns a string by joining all items of the array.
*/