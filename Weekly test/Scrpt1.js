/*
Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/
function isEmpty(obj){
if(Object.keys(obj).length > 0){
    return false;
}else{
    return true;
}
}
let schedule = {
    "8:30" : "get up",
    "name" : "john",
};
let arr ={};
console.log(isEmpty(arr));
