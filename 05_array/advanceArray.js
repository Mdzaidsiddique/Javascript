// Removing items from array :: Array.splice(startIndex, endIndex, "newElements1", "ne2") 
let array = [1, 2, 11, 3, 4, 5, 0, 2]
// console.log(array.splice(-3)); // remove last 3 element
// console.log(array.splice(4, 6)); // remove 4th and 5th index element
// console.log(array.splice(3, "a", "b")); // remove from 3rd index and add to last
console.log(array);

// creating array copies
const fruits = ["Strawberry", "Mango"];

// using spread syntax.
const fruitsCopy = [...fruits]; // ["Strawberry", "Mango"]

// using the from() method.
const fruitsCopy2 = Array.from(fruits); // ["Strawberry", "Mango"]

// using the slice() method.
const fruitsCopy3 = fruits.slice(); // ["Strawberry", "Mango"]


// Array.sort()
let arr = [1, 2, 11, 3, 4, 5, 0, 2]

console.log(arr.sort((a, b) => a - b)); //ascending order
console.log(arr.sort((a, b) => b - a)); //decending order

let str = "a ab s A df gd ss z Z"

let arr1 = str.split(" ");
console.log(arr1.sort());

console.log(arr1.sort((a, b) => b - a));

// Sort the array in a case-insensitive manner, preserving original case for display
let sortedArrAec = arr1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); //aec
let sortedArrDec = arr1.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())); //dec
console.log(sortedArrDec);


// Array.some() :: take callback function and return true or false

let ar = [2, 1, 2, 4, 3, 9, 8, 7, 5]

//is there any even number present or not?

let expResult =  ar.some((item) => {
    return item % 2 == 0;
})

console.log(expResult);