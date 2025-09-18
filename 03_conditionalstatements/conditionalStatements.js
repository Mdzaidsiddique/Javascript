/* 
truthy values: "0", 'false', function(){}, [], {} and everythig that is not falsy is truthy
falsy values: [zero, -0, 0n, "", false, null, undefined, NaN, documnet.all]

(flase == false) is always true
*/

// if 
if (true) {
    console.log("inside if block");
}

// if else
if (false) {
    console.log("inside if block if condition false");
} else {
    console.log("else block");
}

// if, else if, else
var a = 10;
if (a % 10 == 0) {
    console.log(a ** 2);
} else if(a%10!=0){
    console.log(a**3);
}else {
    console.log(a);
}

// switch case
let key = "";
switch (key==false) {
    case true:
        console.log("inside case 1");
        break;
    case false:
        console.log("inside case 2");
        break;
    default:
        console.log("default");
        break;
} 
