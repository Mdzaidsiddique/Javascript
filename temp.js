let array = [1, 2, 11, 3, 4, 5, 0, 2]
// console.log(array.splice(-3)); // remove last 3 element
// console.log(array.splice(4, 6)); // remove 4th and 5th index element
console.log(array.splice(3, "a", "b")); // remove from 3rd index and add to last
console.log(array);