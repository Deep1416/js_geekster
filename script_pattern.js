// function leftYaer(age){
//     let a = 90 - age;
//     let yaers = a * 365;

//     let weeks = a * 52;

//     let months = a * 12;

//     console.log("You have" + " " +yaers+" " + "days ," +" "+ weeks+" " + "weeks, "+"and" +months + " months left. ");
//     //You have 14235 days, 2028 weeks, and 468 months left.
// }

// leftYaer(22);

// function calculator(wight, height) {
//   let BMI = Math.round(wight / Math.pow(height, 2));
//   console.log(BMI);
//   if (BMI < 18.5) {
//     console.log("Your BMI is <bmi>, so you are underweight");
//   } else if (BMI < 24.9) {
//     console.log("Your BMI is <bmi>, so you have a normal weight.");
//   } else {
//     console.log("Your BMI is <bmi>, so you are overweight.");
//   }
// }

// calculator(85, 1.8);

//fuction calling in nested

// function getMilk(money){
//     return 1.5 * money;
// }

// let money  = Math.round(getMilk(55));
// console.log(money);

// function bottles(n){
// let r =Math.round(n/getMilk(55));
// console.log(r);
// }
// bottles(150);

// function calling ended

// Leap Year Challenge
/*
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not Leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not Leap Year";
  }
}

let calender = isLeap(2400);
console.log(calender);
*/

// let guestList = ["Deependra" , "Deep" , "Chotu" , "d"];
// let idx = guestList.includes("Dep") ;
// if(idx){
//     console.log("welcome");
// }else{
//     console.log("Next TIme");
// }

// Fizz Buzz
/*
let output = [];
let count = 1;

  function fizzBuzz() {
    while (count <= 100) {
    if (count % 3 === 0) {
      output.push("Buzz");
    } else if (count % 5 === 0) {
      output.push("Fizz");
    } else if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else {
      output.push(count);
    }
   
    
    count++;
  }
  console.log(output);
}

fizzBuzz();
*/
// let idx =arr.includes("Michael");
// if(idx){
//     console.log("Michael is going to buy lunch today!");
// }else{
//     console.log("Not go of School");
// };

/*
function names(arr){
    // console.log();
    let name = arr.length;

   let people =Math.floor( Math.random() * name);
   //console.log(people);
   let randomPerson = arr[people];
    //console.log(randomPerson + "is going to buy lunch today!"); 
    return randomPerson + "is going to buy lunch today!";
};

let out = names(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
console.log(out);

*/

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


// function fibnoacci(n){
//     let x =0;
//     let y = 1;
//     let z = 1;

//     for(let i = 0; i < n; i++){
//         z = x + y;
//         x = y;
//         y = z;
//         console.log(x);
//     }
// }

// fibnoacci(5);


// let color = "green";

// if(color == "red"){
//     console.log(`${"You have to stop"}`);
// }else if(color == "yellow"){
//   console.log((`${"you have to slow down in 5 sec its become red"}`));
// }else{
//   console.log((`${"you have to go"}`));
// }


// let size = "k";

// if(size === "xl"){
//   console.log("price 250");
// }else if(size === "l"){
//   console.log("price 200");
// }else if(size === "m"){
//   console.log("price 100");
// }else if(size === "s"){
//   console.log("price 50");
// }else{
//   console.log("please enter valid size");
// }

let a =2 ;
let b = 3;
let c = 2;

if(a < b || b  < c){
  console.log("false");
}else{
  console.log("true");
}
