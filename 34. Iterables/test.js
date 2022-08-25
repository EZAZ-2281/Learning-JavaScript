let i; 
let name = "Kibria"; 
for (i of name){
    console.log(i); 
}
// *************
let letter = ["a", "b", "c"]; 
let x; 
for (x of letter){
    console.log(x); 
}
// ************
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
    console.log(x); 
  }
// ******************
const letters = new Set(["a","b","c"]);

for (const x of letters) {
    console.log(x) 
}