const developers = "Zaid, Umair, Salman, Amir"

const devArr = developers.split(" ");

// sort in lexicographical manner
// Accending order

let sortedDevArr = devArr.sort((a, b) => {
    return (a.toUpperCase().localeCompare(b.toUpperCase()))
})

// descending order

let sortedDevArrDesc = devArr.sort((a, b) => {
    return (b.toUpperCase().localeCompare(a.toUpperCase()))
})

console.log(sortedDevArrDesc);