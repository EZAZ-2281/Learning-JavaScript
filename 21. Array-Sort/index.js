let city = ["Dhaka", "Cumilla", "Pabna", "Borishal"]; 
console.log(city.sort()); 
console.log(city.reverse()); 
/* sort number in ascending order */
let num = [40, 100, 1, 5, 25, 10];
num.sort(
    function(a, b){
        return a - b; 
    }
); 
console.log(num); 

// sort number is descending order 
let num2 = [40, 100, 1, 5, 25, 10];
num2.sort(
    function(a, b){
        return b - a; 
    }
); 
console.log(num2); 

// finding max and min using sort
let num3 = [40, 100, 1, 5, 25, 10];
num3.sort(
    function(a, b){
        return a - b; 
    }
); 
console.log("Lowest value: ", num3[0]); 
console.log("Highest value: ", num3[num.length - 1]); 

// finding the max value using math max apply 
function findMax(point){
    return Math.max.apply(null, point); 
    // return Math.min.apply(null, point); 
}
point = [40, 100, 1, 5, 25, 10];
let max = findMax(point); 
console.log("Max value is: ", max);

// home made method for finging largest number into an array 
function findLarge(score){
    let len = score.length; 
    let max = -Infinity; 
    let i; 
    for(i = 0; i < len; i++){
        if(score[i] > max){
            max = score[i]; 
        }
    }
    return max; 
}
let score = [40, 100, 1, 5, 25, 10];
let large = findLarge(score); 
console.log("Large value: ", large); 

// sorting object 
let car = [
    {type: "volvo", year: 2000}, 
    {type: "toyota", year: 2010},
    {type: "range", year: 2015}
]; 
car.sort(
    function(a, b){
        return a.year - b.year; 
    }
); 
console.log(car[0].type +" "+ car[0].year); 
console.log(car[1].type +" "+ car[1].year); 
console.log(car[2].type +" "+ car[2].year); 
/* let value = car.length; 
for(let i = 0; i < value; i++){
    console.log(car[i].type +" "+ car[i].year); 
} */


// sorting the stirng of a object 
let cars = [
    {types: "volvo", years: 2010},
    {types: "audi", years: 2012}, 
    {types: "rangerover", years: 2020}
]; 
cars.sort(
    function(a, b){
        let x = a.types.toLowerCase(); 
        let y = b.types.toLowerCase(); 
        if(x > y) return 1; 
        if(x < y) return -1; 
        return 0; 
    }
); 
console.log(cars[0].types +" "+ cars[0].years); 
console.log(cars[1].types +" "+ cars[1].years); 
console.log(cars[2].types +" "+ cars[2].years); 