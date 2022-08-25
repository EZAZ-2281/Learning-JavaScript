let person = {
    fname : "Golam", 
    lname : "kibria", 
    age : 25
}; 
let x; 
for (x in person){
    console.log(person[x]); 
} 
// ************ 
function myFunc(value, index, array){
    console.log(value); 
}
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunc); 