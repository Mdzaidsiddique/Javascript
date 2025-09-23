/*
Expression: c = a + b
            a, b and c are operands
            + and = are operators
            */

// Assignment operator (=)
let a = 10, b = 5;

// Arithmetic operators [+,-,*,/,%,**]
console.log("add = ", a+b);
console.log("sub = ", a-b);
console.log("mul = ", a*b);
console.log("dev = ", a/b);
console.log("modulo = ", a%b);
console.log("exponential = ", 2**3);

// Comparision operator [>,<,>=,<=,==,===,!=,!==]
console.log(a<b, a<=b);
console.log(a>b, a>=b);
console.log(a==b, a===b);
console.log(a!=b, a!==b);
// ==(loose equility operator: value), ===(strict equality operator: value + type)

// logical operator (&&, ||, &, |)

// unary operator: Unary operators work on a single operand to perform operations like type conversion, 
// increment/decrement, negation, type checking, or property deletion.
let a1 = 5;
console.log(++a1, a1--, !true, typeof(0), "etc")

// boolean operator (true, false)

// nullish Coalescing Operator (??) : (ignore null, undefined, does't care about false, 0, "", etc)
let val;
val = 5 ?? 10; //5
val = null ?? 10; //10
val = undefined ?? 10; //10
val = null ?? undefined ?? 10 ?? 50 //10
console.log(0 ?? 100);       // 0  (because 0 is not null/undefined)
console.log(false ?? true);  // false
console.log("" ?? "Hello");  // "" 
console.log(null ?? "Hi");   // "Hi" (null replaced)
console.log(undefined ?? 99); // 99 (undefined replaced)

// terniary operator : condition ? true : false 
10>5 ? console.log(true) : console.log(false)