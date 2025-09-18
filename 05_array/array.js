//Arrays
let a= [1,2,3]
a[4] = 5 // a = [1,2,3,undefined, 5]

let arr = [1, 2, 3, 4, 5, 6, 7];

arr[0] = 5 //update value of perticular index with provided value

arr.pop(); //remove from last
arr.shift(); //remove from first
//console.log(arr);

arr.push(9) //add element at last
arr.unshift(0) //add element at first
//console.log(arr.length); // number of elements present 

let arr1 = new Array(1, 2, 3, 4);
let arr2 = [5, 6, 7, 8]

let arr3 = arr1.concat(arr2)
//slice()
console.log(arr3.slice(0, 3)); //return shallow copy, original array won't change, exclude last parameter
console.log(arr3);

//splice()
console.log(arr3.splice(0, 3)); //modify original array, (start index, deleteCount) 
// start from index 0 and delete 3 element
console.log(arr3);

//flat()
let array = new Array(1, 2, 3, 4, [34, 4, [5, 3]]);
console.log(array);
let flattedArray = array.flat(Infinity);
console.log(flattedArray);

//include()
console.log(array.includes(34)); //false
console.log(array.includes(3)); //true


//spread operator
let array1 = [1, 11, 3, 5]
let array2 = new Array(6, 7, 8, 4)
let array3 = [];
array3.push(11,12)
array3.push(13)
array3.unshift(10)

console.log(...array1, ...array2, ...array3) //print all arrays at a time

// sorting

let array23 = ["s", "asd", 'Zaid'];
// console.log(array23.sort());
// console.log(array1.sort());

let arz = [1, 2, 3]

//cloning array
let arz2 = arz.slice()

console.log(arz, arz2);

let arz3 = Array.from(arz)
console.log(arz3);

let arz4 = [...arz]
console.log(arz4, typeof arz4);

// check array is empty or not
let arr6 = []

if(arr6.length===0) console.log("Arrayt is empty");