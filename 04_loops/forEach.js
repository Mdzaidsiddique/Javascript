/*
   Processed over arrays
   returns undefined
   
*/

const codingLanguages = ["JS", "Java", "Python", "Ruby", "Swift", "C++"]

codingLanguages.forEach((item) => {
    // console.log(item);
})

codingLanguages.forEach((item, index) => {
    // console.log(`${item} is there on index ${index}`);
})

codingLanguages.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

let obj = {
    id: 1,
    name: "apple",
    price: 599
}

Object.keys(obj).forEach((item, index, arr) => {
    console.log(item, obj[item], arr);
});


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((language) => {
    console.log(language.languageName);
})