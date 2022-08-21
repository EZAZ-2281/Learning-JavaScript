function myFunc(value, index, array){
    //we can only use value as well. 
    txt = txt + value + "\n"; 
}

let numbers = [45, 4, 9, 16, 25];
let txt = " "; 
numbers.forEach(myFunc); 
console.log(txt); 
/*  */
//map function
function myFunction(value, index, array){
    return value * 2; 
}
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction); 
console.log(numbers2);
/*  */
// filter 
function myFunc(value, index, array){
    return value > 15; 
}
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.filter(myFunc); 
console.log(numbers2);  
/*  */
function myFunc(total, value, index, array){
    return total + value; 
}
let number = [45, 4, 9, 16, 25];
let sum = number.reduce(myFunc); 
// let sum = number.reduce(myFunc, 1); reduce method accept an initial value. 
// let sum = number.reduceRight(myFunc); same output. 
console.log(sum); 
/*  */

function myFunc(value, index, array){
    return value > 15; //something like filter 
}
let num = [45, 4, 9, 16, 25];
let num2 = num.every(myFunc); 
console.log(num2); //reutrn false cause all value is not over 15 
/*  */

function myFunc(value, index, array){
    return value > 15; 
}
let num = [45, 4, 9, 16, 25];
let num2 = num.some(myFunc); 
console.log(num2); //return true cuz some value are under 15.  
/*  */
let num = [1, 2, 3, 4, 5]; 
let index = num.indexOf(3); 
let index2 = num.lastIndexOf(4); 
console.log(index); 
console.log(index2); 
// return -1 if the value is not found  
/*  */
function myFunc(value, index, array){
    return value > 2; 
}
let num = [1, 2, 3, 4, 5]; 
let num2 = num.find(myFunc); 
console.log("First value greater than 2 is: ", num2); 
/*  */

function myFunc(value, index, array){
    return value > 15; 
}
let num = [10, 11, 23, 45, 56]; 
let num2 = num.findIndex(myFunc); 
console.log("First number over 15 has index: ", num2);  
/*  */

// The Array.from() method returns an Array object from any object with a length property or any iterable object.
let a = Array.from("Kibria"); 
console.log(a); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.keys(); 
for(let i of a){
    console.log(i); 
}
//return 0 1 2 3 

/*  */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.entries(); 
for(let i of a){
    console.log(i); 
}
// Create an Array Iterator, and then iterate over the key/value pairs. 


/*  */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.includes("Banana"); 
console.log(a); //true
/*  */