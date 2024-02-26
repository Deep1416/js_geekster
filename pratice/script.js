// let var1 = 9;
// if(var1 % 10 === 0){
//     console.log("Good");
// }else{
//     console.log("bad");
// }

// let var1 = prompt("what is your age : ");
// let var2 = prompt("what is your age :");

// alert = (`${var1} is {var2} years old. `);

// switch

// let Quater = 4;

// switch (Quater) {
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Enter Valid Quater");
//         break;
// }

// let arr = ["deependra" , 70 , 18.9];

// let arr = ["jan" , "july" , "Augest" , "may"];
// let arr1 = ["for" , "game"];

// let str = "";

// if(str == 0){
//     console.log("String id blank");
// }else{
//     console.log("string is not blank");
// }

// let str2 = "ApnaCOLLEGE";
// let idx = 3;

// if (str2[idx] == str2[idx].toLowerCase()) {
//     console.log("string is lowercase");
// }else{
//     console.log("string is uppercase");
// }

// let str = "   this is a string";

// console.log(`${str}`);
// console.log(`${str.trim()}`);

// let arr = ["Deep " , "deeui" , 65 , 45 , -58];
// let idx = -58;
// if(arr.includes(idx) != false){
//     console.log("element exists in array");
// }else{
//     console.log("element doesnot exists in array");
// }

// for (let index = 1; index <= 15; index++) {
//  if(index % 2 != 0){
//     console.log(index);
//  }

// }

// for (let index = 2; index <= 10; index += 2) {
//     console.log(index);

// }
// let n = 5;
// let m = 0;

// let j = prompt("what type of table you shud print it")

// for(let i =  1; i <= 10 ; i++){
//     m = j * i;
//     console.log(m);
// }

// let fav = "Avatar";
// let guess  = prompt("Movie name");

// while( (guess != fav) &&( guess != "quite")){
//     guess = prompt("netx movie");
// }

// if(guess == fav){
//     console.log("congrats");
// }

/*

let fruits = ["mango" , "apple" , "lichi" , "kiwi"];
for ( i of fruits) {
    console.log(i);
}

*/

// todo list.

// let todo = [];

// let todo1 = prompt("This is your choice");

// while (true) {
//   if (todo1 == "quit") {
//     console.log("quiting todo.");
//     break;
//   }

//   if (todo1 == "list") {
//     for (i of todo) {
//       console.log(i);
//       console.log("print a list.");
//     }
//   } else if (todo1 == "add") {
//     let task = prompt("pleaase enter your number");
//     todo.push(task);
//     console.log("task add");
//     // break;
    
//   } else if (todo1 == "delet") {
//     todo.pop(); 
//     console.log("delete item");   
//   } else {
//     console.log("todo complete");
//   }

// }


// const student = {
//     name : "Deep",
//     city : " gwalior",
//     mobile : 625345455,
//     add : "sath bhai",
//     age : 22,
//     colors : ["pink" , "red" , "black"]
// };

// const post = {
//     username : "@Deependra",
//     content : "This is a beatuiful of the city",
//     likes : 150,
//     repost : 10,
//     tags : ["@shubhu" , ["@deep" , "sakshi" ,["harshit" , "mo"]] , "@jerry"]
// };



// const student = [
//      {
//         name : "deep",
//         marks : 95,
//         bloodGroup : "A+"  
//     },
//      {
//         name : "subhu",
//         marks : 95,
//         bloodGroup : "A+" 
//     },
//     {
//         name : "dev",
//         marks : 95,
//         bloodGroup : "A+" 
//     }
// ];

// let n = 100;
// for(let i = 1 ; i <= n ; i++){
//     console.log(Math.random(i));
// }

// let n = Math.floor(Math.random() * 100);
// console.log(n);


// let j = Math.floor(Math.random()*5);
// console.log(j);



const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.unsplash.com/search/photos?page=${x}&query=${inp.value}&client_id=${key}`);
xhr.setRequestHeader('Authorization', 'Client-ID ' + key);
xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    console.log(response);
    }
        xhr.onerror = () => { console.log("Error occurred!"); };
xhr.send();