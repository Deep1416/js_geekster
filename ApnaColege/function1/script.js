/*
let btn = document.getElementById("btn");
let show = document.getElementById("show");
function roll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    show.innerText = dice;
}
setInterval(() => {
    roll(); 
}, 1000);

*/

// function average(x , y , z) {
//     let a = (x+ y+ z )/3
//     console.log(a);
// }

// average(10 , 10 , 10);

// function table(n) {
//     for (let i = 1; i <= 10; i++) {
//         let table = n * i;
//         console.log(table);
        
//     }
// }

// table(2);

// function sum (n) {
//     let sum =0;
//     for(let i = 1 ; i <= n ; i++){
//         sum += i;
//     }
//     return sum;
// }

// let total = sum(4);
// console.log(total);

// let arr = ["high" , "hello" , "bye" , "!"];

// function conation(arr){
//     let sum = "" ;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;

// }

// let str = conation(arr);
// console.log(str);

// let x= {}, y = {name:"Ronny"},z = {name:"John"};

// x[y] = {name:"Vivek"};
// // console.log(x[y]);
// x[z] = {name:"Akki"};
// // console.log(x[z]);
// console.log(x[y]);




// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();



// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel; //99
//     }
//   }
  
//   let getPower = hero.getPower;  //99

//   console.log(getPower);

//   let hero2 = {powerLevel:42};

//   console.log(getPower());
//  //99

//   console.log(getPower.apply(hero2));

// const a = function(){

//     console.log(this);
  
//     const b = {

//       func1: function(){
//         console.log(this);
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log(this);
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();
  
  
// const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name);//vivek
//       (function(){
//         console.log(this.name);//vivek
//         console.log(self.name);//undefined
//       })();
//     }
//   }
//   b.f();

// let a = 9;
// function inner() {
//   console.log(a);
// }
// inner();


let a = 1;
let b = 1;
let c = 1;
if(a == b == c){
  console.log("false");
}else{
  console.log("true");
}