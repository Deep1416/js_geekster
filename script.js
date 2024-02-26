// console.log("Hello World");
// console.log("Thank YOU");
// console.log(1-"1");
// var a = 0;
// console.log(10/a);
// console.log(typeof(null) == typeof(undefined));
// console.log(typeof(typeof(typeof(100))));

// Function topic

//  function showAlert(){
//     alert("Hey!");
//  }
//  showAlert();

// function sum(){
//     console.log(4+5);
// }
// sum();

// function sum1(a , b) {
//     console.log(a +b);
// }
// sum1(5 ,8);

// function sub(a , b) {
//     return a-b;
// }

// var result = sub(21, 11);
// console.log(result);
/*
function sum(a , b) {
    
    return a+b;
}

var result = sum(5 , 5 ,5);
console.log(result);

function test(a , b , c) {
    console.log(a+b*c);
}
test(2 ,3);
*/

// function hostDemo() {
//     console.log(i);
// }
// hostDemo();

/*
function hoistDemo(){
    console.log(i);
    var i = 10;
}
hoistDemo();

nameD();

function nameD() {
    console.log(i);
    var i = 10;
}

x = 5;
console.log(x);
var x;
*/

// var arr = new Array(1 , 2 , 3 , 4, 5);

// arr[2]= 9;
// console.log(arr);

// arr[7] = 3;
// console.log(arr);

// const fruit = ["a", "d", "s"];
// fruit[0]=Date.now;
// console.log(fruit[0]);
// let flen = fruit.length;
// let text = "<ul>";
// for (let i = 0; i < flen; i++) {
//   text += "<li>" + fruit[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

// let txt = "I can eat bananas all day";
// let x = txt.slice(
// 0
// ,
// 10
// );
// console.log(x);
// console.log(txt);
// Math.round(7.25);

// const student = {
//   name: "Deep",
//   lastName: "rajput",
//   age: 22,
//   marks: 8.0,
// };
// console.log(student);
// console.log(student.lastName);
// console.log(student.marks);
// console.log(student.sem = 4);
// console.log(student.marks=100);

// set timing
// var sec = 10;
// function sayHello() {
//     console.log(sec);
//     sec--;
//     if(sec==0){
//         console.log("TIme up!");
//         clearInterval(id);
//     }
    
// }

// var id = setInterval(sayHello,1000);


// let n = 5;
// let str = "";
// for(let i =  1 ; i <= n ;i++ ){
//     for(let j = 1 ; j <= n - i; j++){
//         str += "  " ;
//     }
//     for(let j = 1 ; j <=  2*i-1; j++){
//         str += j+" " ;
//     }
//     str += "\n";
// }
// console.log(str);



// let n = 5;
// let str = "";
// for(let i = 1; i <= n ;i++){
//     for(let j = 1; j <= n-i+1 ;j++){
//         str += "  ";
//     }
//     for(let j = 1; j <= i ;j++){
//         str += j+" ";
//     }
//     str +="\n";
// }
// for(let i = 1; i <= n ;i++){
//     for(let j = 1; j <= i+1 ;j++){
//         str += "  ";
//     }
//     for(let j = 1; j < n-i+1 ;j++){
//         str += j+" ";
//     }
//     str +="\n";
// }
// console.log(str);


// let n = 5;
// let str = "";

// for(let i = 1; i <= n ;i++){
//     for(let j = 1; j <= i ;j++){

//         str += j+" ";
//     }
//     str +="\n";
// }
// for(let i = 1; i <= n ;i++){
//     for(let j = 1; j < n-i+1 ;j++){
//         str += j+" ";
//     }
//     str +="\n";
// }
// console.log(str);




// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j < i; j++) {
//     string += "  ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k +" ";
//   }
//   string += "\n";
// }
// console.log(string);


// let n = 5;
// let str = "";
// for(let i = 1 ;i <= n ;i++){
//     for(let j = i ; j >= 1 ;j--){
//         str += j+" ";
//     }
//     str += "\n";
// }
// for(let i = n-1 ; i >= 1 ;i--){
//     for(let j = i ; j >= 1 ;j--){
//         str += j+" ";
//     }
//     str += "\n";
// }

