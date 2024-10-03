function receivesAFunction(callback){
    let fruit = "Banana"
    return callback(fruit)

}
receivesAFunction(Func);

function Func(value){
    console.log(value)
}


function returnsANamedFunction(){
    function main(){
        console.log("Returns named function")
    }
    return main;
}

const namedFunction = returnsANamedFunction()
namedFunction();


function returnsAnAnonymousFunction(){

    return ()=>{ console.log("Returns anonymous function")}
}

const AnonymousFunction = returnsAnAnonymousFunction()
AnonymousFunction();