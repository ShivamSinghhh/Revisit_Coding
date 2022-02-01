
let count = 1 ;


let div = document.getElementById("show");

div.addEventListener("scroll",something)

function something(){
    if (div.scrollTop+div.clientHeight >= div.scrollHeight)
    {
       scrollList();
    }
}


function scrollList(){    

for(let i = 0 ;  i<25; i++ ){
let h3 = document.createElement("h3");
h3.innerText = `Masai School ${count++}`;
div.append(h3)
}

}

scrollList()

