// obj through constructor

let obj = new Object();

obj["name"] = (()=> console.log("my name is khan"))();

delete obj.name

console.log(obj);

