const Car = {
    name: "Volvo", 
    weight: "1000kg",
    model: 500,
    start: function(){
        this.drive()
        console.log("Car has started")
    },
    drive: function(){
        console.log("Car is driving")
        console.log("Car name is: " + this.name) 
    }, 
    add: function(){
        return this.name + " " + this.model
    }
}; 
console.log(Car.name);
console.log(Car["weight"]);
Car.start();
let x = Car.add(); 
console.log(x); 

/* If you access an object method without (), it will return the function definition */


