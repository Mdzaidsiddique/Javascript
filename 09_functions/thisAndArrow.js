// this keywords refers to current context
// this works in arrow function not in other function

const user = {
    username: "zaid",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// console.log(user)
// user.welcomeMessage();
// console.log(this); // { }
// user.username = user.username + " alif"
// user.welcomeMessage();

//  this keyword inside a function 

// function chai(){
//     let username = "zaid"
//     console.log(this.username); // this keyword not work in a function except arrow
// }

// chai() // undefined

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // this keyword not work in a regular function except arrow
// }
// chai() // undefined

// const chai =  () => {
//     let username = "zaid"
//     console.log(this.username); // {}
// }
// chai()


//  ------- Arrow Function ----------
// const addTwoNums = (num1, num2) => {
//     return num1 + num2  // return keyword mandatory in { }
// }

// const addTwoNums = (num1, num2) => (num1 + num2) // return not required

const checkArrowWithObect = () => ({ name: "zaid"}) 

console.log(checkArrowWithObect());

