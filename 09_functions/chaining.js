// using muliple method symulteniousaly is called chaining

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=> num*10)
                        .map((item)=> item+1)
                        .filter((numb) => numb >= 40 )

// console.log(newNums);

const nums = [1,2,3,4]
let acc = 0

const reduce = nums.reduce((acc, curr) => {
    return acc + curr;
}, acc);

console.log(reduce);
