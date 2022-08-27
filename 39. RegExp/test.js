let a = "Golam Kibria"; 
let b = a.search("Kibria"); 
let c = a.search(/kibria/i) //casea insensative
console.log(b); 
console.log(c); 

// ***********
let d = "Golam Ezaz"; 
let e = d.replace("Ezaz", "Kibria"); 
let f = d.replace(/ezaz/i, "Kibria"); 
console.log(e); 
console.log(f); 

// ***********
console.log(/e/.test("Golam kebria")); //true
console.log(/e/.exec("Golam kibria")); //null
console.log(/e/.exec("Golam kebria")); //[ 'e', index: 7, input: 'Golam kebria', groups: undefined ]