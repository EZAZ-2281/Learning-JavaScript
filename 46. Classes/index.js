/* class Car {
    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }
}
let ob = new Car("Ford", 2012); 
console.log(ob.name + " " + ob.year);  */
/* class Car{
    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }
    age(){
        let date = new Date(); 
        return date.getFullYear() - this.year;
    }
}
let ob = new Car("volvo", 2012);
console.log("My car is: " + ob.age() +" years old");  */



class Car{
    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }
    age(x){
        return x - this.year; 
    }
}
let date = new Date(); 
let x = date.getFullYear(); 
let ob = new Car("Volvo", 2010); 
console.log("My car is: "+ob.age(x)+" years old")