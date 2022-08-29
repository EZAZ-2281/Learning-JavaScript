let person = {
    fNmae: "Golam",
    lName: "kibria",
    ID: 522,
    fullNmae: function(){
        return this.fNmae + " "+ this.lName; 
    }
}
console.log(person.fullNmae()); 
// this keyword reger to an object  
let person2 = {
	fullName: function(){
		return this.fName+" "+this.lName; 
	}
}
let person1 = {
	fName: "Abdur",
	lName: "Rahim"
}
let x = person2.fullName.call(person1); 
console.log(x); 

/* The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument. */