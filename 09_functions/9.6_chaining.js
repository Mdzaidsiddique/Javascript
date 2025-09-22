// using muliple method symulteniousaly is called chaining

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=> num*10)
                        .map((item)=> item+1)
                        .filter((numb) => numb >= 40 )

// console.log(newNums);

let nums = [1,2,3,4]
let acc = 0

const reduce = nums.reduce((acc, curr) => {
    return acc + curr;
}, acc);

console.log(reduce);

nums = [1,2,3,4,5,6,7]
res = nums.map( item => item*10)
        .map(item => item+5)
        .filter(item => item >=40)
        .reduce((acc, curr)=>{
            return acc+curr;
        }, 0)

// inside res we have sum of all the values above 40
console.log(res);