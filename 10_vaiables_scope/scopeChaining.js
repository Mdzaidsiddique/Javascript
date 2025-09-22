// scope chsining :: if one variable has a scope and we use that variable in different scope is called scope chaining

let outerVariable = 10;

function main(){
    let innerVariable = 20;
    
    function insideMainFun(){
        console.log(innerVariable);
    }

    function insideMainTwo(){
        console.log(outerVariable);
    }

    insideMainFun();
    insideMainTwo()
}

main()