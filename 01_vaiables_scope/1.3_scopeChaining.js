// scope chaining: if one variable has a scope and we use that variable in different scope is called scope chaining

let outervar = 10;

function main(){
    let innervar = 20;

    function innerOne(){
        console.log(innervar);
    }

    function innerTwo(){
        console.log(outervar);
    }

    innerOne();
    innerTwo();
}

main();