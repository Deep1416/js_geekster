let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");


div1.addEventListener("click",()=>{
    console.log("div1");
}, true);
div2.addEventListener("click" , () =>{
    console.log("div2");
}, true);
div4.addEventListener("click" , (e)=>{
    console.log("div3");
    e.stopPropagation();
}, true);
div4.addEventListener("click" , (e)=>{
    console.log("div4");
    e.stopPropagation();
} , true);