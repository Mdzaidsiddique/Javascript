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
        

res = developers_array.reduce((acc, item) => {
    if(item.dept === "FE"){
        acc.FE.push(item.firstName)
    }else{
        acc.BE.push(item.firstName)
    }
    return acc
}, {
    BE : [],
    FE : []
})

console.log(res)