/*
father  = 85 marks;
exam = next week;
till next = promise is in pending stage.
>= 85 marks // succeded  // laptop
< 85   //  do work hard!  

Promises = it is an object in JS representing eventual completion or 
failure of an asynchronus function.

promises link the production code with consumption code.

#production code = this is the code which require some "x" time to 
give result or response.

#consumption code = this is the code , which wait for the result from production code.

// three state of promises
1 pending  
2 resolve
3 rejected

*/

let pro = new Promise((res,rej)=>{
    let a = 5; 
    setTimeout(() => {
        if (a%2=== 0) {
            res("this is an Even number")
        }
        else{
            rej("this is an Odd number")
        }
    }, 5000);

})

console.log(pro)

pro.then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
}).finally(()=>{
    console.log("finally done!")
})

//async and await is syntactic sugar to write promises

async function test(){
    try{
        let p = await pro;
        console.log(p)
    }catch(e){
        console.log(e)
    }
}

test();





