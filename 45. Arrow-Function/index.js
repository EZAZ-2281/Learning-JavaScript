let myFunc = (a, b) => a * b; 
let x = myFunc(2, 3); 
console.log(x); 

hello = function(){
    return "Kibria"; 
}
console.log(hello()); 

hello1 = () => "Kibria"; 
console.log(hello1()); 

watch = (nam) => "Hi " + nam; 
console.log(watch("Dhaka")); 


function myFunction(num){
    let len = num.length; 
    let max = -Infinity; 
    for(let i = 0; i < len; i++){
        if(num[i] > max){
            max = num[i]; 
        }
    }
    return max; 
}
numbers = [1, 2, 5, 3, 7, 9, 8]; 
let res = myFunction(numbers); 
console.log(res); 