/*
- return brand new array with the same number of items as old one
- take callback fn as a parameter and get access to all items one by one
- there is no way to skip elements 
*/

let arr = Array(2, 3, 4, 5, 6, 8, 5);

// increase arr elements by 100
let result = arr.map((num) => {
    return num + 100;
})


let faculty = "Umair Salman Kashif Zaid Amir"
const facultyArray = faculty.split(" ")

// task : to Mr. to every name

let finalFacultyArray = facultyArray.map((facultyName) => {
    return "Mr " + facultyName;
})

finalFacultyArray.forEach((indvisual) => {
    console.log(indvisual);
})