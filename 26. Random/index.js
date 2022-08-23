console.log(Math.random()); 

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));

// Returns a random integer from 0 to 10. 
console.log(Math.floor(Math.random() * 11));

//create a random function. 
function myFunc(max, min){
    return Math.floor(Math.floor(Math.random() * (max - min)) + min); 
}
let a = myFunc(0, 10); 
console.log(a); 