let fruits = new Map([
    ["apple", 20], 
    ["orange", 40], 
    ["mango", 80]
]); 
console.log(fruits.get("apple")); 
// ************
let fruits2 = new Map(); 
fruits2.set("apple", 20); 
fruits2.set("mango", 40); 
fruits2.set("banana", 60); 
console.log(fruits2.get("apple")); 

let fruits3 = new Map([
    ["apple", 20], 
    ["orange", 40], 
    ["mango", 80]
]); 
fruits3.set("apple", 100); 
console.log(fruits3.get("apple")); 
console.log(fruits.has("apple")); //true
// ***********
let fruits4 = new Map([
    ["apple", 20], 
    ["orange", 40], 
    ["mango", 80]
]); 
fruits4.delete("apple"); 
console.log(fruits4.size); 
// **************
let fruits5 = new Map([
    ["apple", 20], 
    ["orange", 40], 
    ["mango", 80]
]); 
fruits5.forEach(function(value, key){
    console.log(key+" "+value); 
})
// ************
let fruits6 = new Map([
    ["apple", 20], 
    ["orange", 40], 
    ["mango", 80]
]); 
let x; 
for (x of fruits6.entries()){
    console.log(x); 
}