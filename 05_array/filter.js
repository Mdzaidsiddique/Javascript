/*
    Array.filter() ::
    return new array with same or less number of items then older array
    take an argumentFunction
    we can skip elements in filter() call
    for every item argyument fn will return truthy/falsy value, truthy one will be included in new array
*/

let arr = new Array(10, 2, 4, 6, 8, 12, 12, 3, 1, 55, 3);

let sumArr = arr.filter((num) => {
    return num % 2 == 0;
})

console.log(sumArr.sort((a,b)=> (a-b)));