let box = document.getElementById("box");

let span = document.getElementById("bxo-span");

for(let i = 1; i <= 10 ; i++){
    let mBox = document.createElement("div");
    box.appendChild(mBox);
    mBox.classList.add("container");
    let newColor = randomcolor();
   // console.log(newColor);
    mBox.style.backgroundColor = newColor;
    mBox.innerText = newColor;
}

for(let i = 0 ; i < 20 ; i++){
    let spanBox = document.createElement("span");
    span.appendChild(spanBox);
    spanBox.classList.add("span-box");
    let spancolor = randomcolor();
    spanBox.style.backgroundColor = spancolor;
    spanBox.innerText = spancolor;
}


function randomcolor(){

    let str = "0123456789abcdef";

    let random ="#";
    for(let i = 0 ; i < 6 ;i++){
        let color = Math.floor(Math.random() * str.length);
        random +=str[color];
    }
    // console.log(random);
    return random;
}

randomcolor();