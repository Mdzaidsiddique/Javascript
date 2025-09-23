// Exception: unexpected even that interupt the normal flow of the execution of the program
// Exception handling in JS is done with try...catch...finally and throw. 
// For async operations, use .catch() or try...catch with async/await.

function devide(num1, num2){
    if(num2==0){
        throw new Error("devision from zero is not allowed")
    }
    return num1/num2;
}

console.log(devide(4, 2));

// console.log(devide(2, "fd")); // NaN

// try-catch-finally 
try {
    let result = devide(10, 0)
    console.log(result);
} catch (error) {
    console.log("Can't devide from zero: ", error.message)
} finally{
    console.log("always run, cleanUp, closeDB, etc");
}