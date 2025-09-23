// A factory function is a function that returns a new object. It doesn't use the new keyword. 

function createAccount(userName, email, otp){
    // let account = {
    return {
        userName : userName,
        email : email,
        otp : otp,
        status : function () {
            console.log(`Congratulation ${userName}, your account is created successfully`);
        }
    }
    // return account;
}

let user1 = createAccount("zaid", 'z@gmail.com', 7866)
let user2 = createAccount("alif", 'a@gmail.com', 4535)

user1.status()
user2.status()

console.log(user1.email, user2.email);