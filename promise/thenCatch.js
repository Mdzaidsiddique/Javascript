// promise :: pending, resolve reject

let promise1 = new Promise((resolve, reject)=>{
    let data = false; // fetching data from url, db connection etc
    if(data){
        console.log(data);
    }else{
        console.log("error");
    }
})

promise1

new Promise((resolve, reject)=>{
    let data = true;
    if(!data){
        resolve(data)
        console.log("fetched successfully");
    }else{
        reject(Error);
        console.log("Error : ", Error);
    }
}).then((success)=>{
    console.log(success);
}).catch((fail)=>{
    console.log(fail);
})

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => { // data -> return from first then()
    console.log(data);
})
.catch((error) => console.log(error))
.finally(()=>{
    console.log("finnalhy will execute always");
})