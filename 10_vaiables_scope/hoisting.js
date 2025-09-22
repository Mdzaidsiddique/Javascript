// hoisting :: hoisting entails moving all variable to the top of the scope before executing the code
// Hoisting is the default behavior in JavaScript where declarations of variables and functions are moved to the top of their respective scopes during the compilation phase. 

fun() // possible because of hoisting
function fun(){
    console.log("inside function fun");
}

var varA;
console.log(varA); // undefined
varA= 90
console.log(varA); //90
// fun() // not a function
var fun = function (){
    console.log("inside function fun expression");
}
fun() // inside function fun expression


// TDZ :: temporal dead zone: refers to the period of time during which a variable is in scope but not yet declare.
// this concept primarily applies to variable declare with let and const
{ 
    // TDZ starts here
    // console.log(x); //Reference Error :: because of TDZ
    
    let x;
    console.log(x); // undefined
    x = 5; // TDZ ends here

    console.log(x);
}
