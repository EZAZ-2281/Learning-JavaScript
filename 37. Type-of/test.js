console.log(typeof x); //undefined
console.log(Number("12")); //12
// ***
x = "Kibria"; 
y = +x; 
console.log(typeof x); //string
console.log(typeof y); //number NaN
// ***
x = 1 + 2; 
console.log(String(x)); 
console.log(String(10)); 
// ***
console.log(Number(false)); //0
console.log(Number(true)); //1