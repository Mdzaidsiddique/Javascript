

/*
array.reduce(function(){}, <initialValue>)
*/

// Array.reduce() is the most powerful method in javascript
// it can return anything

let array = [2, 3, 4, 5, 6];

// find the product of each items present in array using reduced

// product
let product = array.reduce((prev, current) => {
    return prev * current;
}, 1)

// sum
let sum = array.reduce((prev, current) => {
    return prev + current;
}, 0)

console.log(sum);

let developers_array = [
    {
      firstName: "John",
      lastName: "Doe",
      dept: "FE",
      commits: 10
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      dept: "BE",
      commits: 15
    },
    {
      firstName: "James",
      lastName: "bond",
      dept: "BE",
      commits: 8
    }]; 

// expected result : { BE: ["Jane", "James"], FE: ["John"]} 

// let result = developers_array.reduce((acc, current) => {
//     current.dept === "BE" ?
//         acc.BE.push(current.firstName) :
//         acc.FE.push(current.firstName);
    
//     return acc;
        
// }, {
//     BE: [],
//     FE : []
// })

// console.log(result);

// another example of reduce()
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
function groupById(users){
    let ans = users.reduce((acc, current) => {

        acc[current.id] = current;
        return acc
    
    }, {});
    return ans;
};
  
let usersById = groupById(users);
console.log(usersById);  

  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */