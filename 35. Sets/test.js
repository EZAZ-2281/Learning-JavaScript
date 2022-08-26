let letter = new Set(["a", "b", "c"])
console.log(letter.size) //3
// **********
let letter2 = new Set(); 
letter2.add("a"); 
letter2.add("b"); 
letter2.add("c");
console.log(letter2.size); //3
// ************
let letter3 = new Set(["a", "b", "c"])
letter3.forEach(function(value){
    console.log(value); 
})
// ************
let letter4 = new Set(["a", "b", "c"]); 
let z; 
for (x of letter4.values()){
    console.log(x); 
}
// ***********