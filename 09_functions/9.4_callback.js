/* callback or argument function
- a fn that passed as an args to another fn and execute later
why imp?
- Enable asynchronous programming (non-blocking code in JS)
- Used in event listeners, API requests, setTimeout/setInterval, etc.
- Foundation of Promises and async/await */

function fun(callbackFun){
    console.log("Hi...");
    callbackFun();
}

// (1) basic callback function
// function callbackFun(){
//     console.log("bye...");
// }

// fun(callbackFun);

// (2) anonymous callback function
fun(() => {
    console.log("byee..")
})


// (3) callback in asynchronous code (Here, the arrow function is a callback that executes after 2 seconds)
setTimeout(()=>{
    console.log("this will execute after 2 sec");
}, 2000)