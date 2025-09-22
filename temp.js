function higherOrder2(){
    return function sayHi(name){
        console.log(`Hi ${name}`);
    }
}

greeti = higherOrder2()
greeti("zaid alif siddique")