
let count = 1 ;

let div = document.getElementById("show");

div.addEventListener("scroll",scrollDown)

function scrollDown(){
    if (div.scrollTop+div.clientHeight >= div.scrollHeight)
    {
       showList();
    }
}


function showList(){    

for(let i = 0 ;  i<25; i++ ){
let h3 = document.createElement("h3");
h3.innerText = `Masai School ${count++}`;
div.append(h3)
}

}

showList()

