let productConatiner = document.querySelector(".product-container");
let createProductItm = document.createElement("div");

function  addToCart(e,count){
    console.log(count);
    count = e.target.parentNode.children[1].innerText;
    console.log(count);
}


productConatiner.addEventListener(("click") , (e)=>{
    let count = 0;

    if(e.target.innerText === "+"){
        count = parseInt(e.target.parentNode.children[1].innerText);
        count++;
        console.log(count);
        addToCart(count , e);
    }else if(e.target.innerText === "-"){
        count = parseInt(e.target.parentNode.children[1].innerText);
        if(count > 0){
            count--;
        }else{
            alert("Not any item present in cart");
            // console.log("Not any item present in cart");
            return;
        }
        addToCart(count , e);
    }
});


function displayProduct(){
    Products.forEach((e) =>{
        let div1 = document.createElement("div");
        div1.style.backgroundcolor = "red";
        div1.innerHTML = `
        <div class = "numberOfProduct">
        <div>${e.name}</div>
        <div>${e.price}</div>
        <div class="span1">
        <span class ="add">-</span>
        <span class = "ItemCount add ">0</span>
        <span class = "sub add">+</span>
        </div>
        </div>
               `
        productConatiner.appendChild(div1);
    })
}

window.onload = displayProduct();

