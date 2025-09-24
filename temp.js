let o = {
    name : "umair",
    sayArrowHello : ()=>{
        console.log("hello arrow", this);
    }
}

o.sayArrowHello()