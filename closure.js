/* 
 closure is the combination of functions bundled together (enclosed) with 
 reference to its surrounding state . i.e (lexical enviornment).

 In other words, closure gives access to the outer function from inside function.
 It remembers its history.

 Every closure have three scopes:
 1- local scope 
 2- outer functional scope
 3- global scope.

 uses of closure :
 memoize the variable
 asynchronus behaviour
 iteration
 setTime out



*/

 let a = 5;  // global scope
 function sum(){  // outer function 
     let b = 10;   // outer function scope
     function total(){  // inner function
         let c = 15;    // local scope
         console.log(a+b+c)
     }
     
     return total;
 }
 
//  let ans = sum(); // sum function is invoked
// // console.log(ans())

//  function test (){

//     for (let i = 0 ; i< 5 ;i++){    // let is block scope
//         setTimeout(function(){      // var is global scope or functional scope.
//             console.log(i)
//         },i*1000)      
//     }
//     console.log("hello")
//  }
//  test()



