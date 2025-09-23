/* vraibles: 
- variables is a named container to store value and to reuse them
- variables are case-sensetive (name != Name)
- variables naming rules: 
    - allowed: _, $, Letters, Numbers
    - not allowed: 123abc, abc-123
*/

// 1) let: introduces in ES6(2015), block-scoped
let userName = "zaid"; // here name is variable-name & zaid is value

// 2) var: old way (before ES6), function-scoped & can be redeclare (not recommonded)
var penName = "alif" 

// 3) const: also in ES6, blocked-scoped, can't be redeclare or updated, i.e used for constant
const dob = "10 July 1990";

console.log(userName, penName, dob)

userName = "zaid alif"; // update allowed
penName = "zaid alif siddique"; // update allowed
// dob = "10 July"; // Error: Assignment to constant variable

