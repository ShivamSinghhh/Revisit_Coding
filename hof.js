/* 
first class function:- the function which can be written in the form of 
function or variables, or it can be passed as an arguement to another function

Higher order function (HOF) :
the functions which takes another function as an arguement or return another function
is called higher order function.

types of hof:
1. array.forEach
2. array.map
3- array.filter
4 - array.reduce

* most of the hof are applicable to the arrays.


callback function: callback is the function passed to another function
 as an arguement;

*/

// ----- call back function----

// function sum(a,b,callback){
//     total = a+b;
//     callback(total)
// }

// function print(msg){
//     console.log(msg)
// }

 // sum(20,10,print)

 // let arr = [2,4,5,7,]

 // forEach : it will implement the order to each element of the array

//  for (let i = 0 ; i < arr.length; i++){
//      console.log(arr[i])
//  }
 // arr.forEach((e)=>{ console.log(e)})


  // array.map----- it gives another array as an output
//   let arr = [2,4,5,7,0]
//   let tripple = function(el){
//       return el*3
//   }

//   let output = arr.map(tripple);
//   console.log(output);


// array.reduce --- it will iterate through the entire array and gives 
// us a single output;
// reduce function takes two parameter i,e accumulator and current value
// accumulator bydefault take the first value of the array;
// curr will start from second value by default i.e curr = array[1]

// let arr = [2,4,5,7]
// let mult = arr.reduce((acc,curr)=>{
//     // console.log("acc =",acc,"curr =",curr)
//      return acc*curr;
// },1)

// console.log(mult);

// array.filter -- this method filter the array according to the filter criteria
// and return another array.

let arr = [2,4,5,12,15] ;
let even = arr.filter((a)=>{
    if (a%2===0)
   { return a;}
})
// console.log(even)

function isOdd(x){
    if (x%2 !== 0)
    { return true}
    else {return false}
}

let odd = arr.filter(isOdd);
console.log(odd)




