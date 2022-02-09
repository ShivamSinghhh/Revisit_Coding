/* 
closure : closure is combination of functions bundled together(enclosed) 
with refrence to its surrounding state i.e (lexical enviornment)

closure give access to outer function's scope from inside function.

uses of clousure:
1- memoize,
2- maintain asynchronus behaviour
3- iteration
4- set timeout

*/

function x(){
    for(let i = 1 ;  i < 5; i++){
        
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
    console.log("hello world!")
}
 // x();

// var i // global scope
// let i // local scope, 
// it will create copy of i as many time as it is called with other i;



function y(){  // outer function
    let a = 10 ;

    function z(){  // inner function
        var b = 5
        let sum = a+b;
        console.log(sum)
    }
  z()
  

}
y()

