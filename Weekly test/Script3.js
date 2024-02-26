/*
Q4.) Create an object calculator with three methods:
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
let a , b;
let calculator = {
    read : function (){
        a = prompt("Enter first Number : ");
        b = prompt("Enter Second Number : ");
    },
    sum:function(){
        return  parseInt(a) + parseInt(b);
    },
    mul : function(){
        return  (parseInt(a) * parseInt(b));
    },
  };

  calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

