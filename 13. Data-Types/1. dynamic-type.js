let x; //undefined
x = 10; //x is a number
x = "kibria"; //now x is a string
console.log(x); //kibria

/* quotes inside a string */
console.log("gol'am 'kibria'")
console.log('goalm "kibria"')

//js array
const name = ["kibria", "rahim", "karim"]
console.log(name[0])

//js object
const person = {
    //name/property:value
    firstName: "kibria",
    lastName: "Ezaz",
    age: 22,
    add: "dhaka"
}
console.log(person.firstName)
console.log(person.age)

/******************/
console.log(typeof(2)) //number
console.log(typeof(2.1))
console.log(typeof(2 + 3))
console.log(typeof("")) //string

/*-------------*/
let car; 
console.log(typeof(car)) //undefine
let cars; 
cars = undefined
console.log(typeof(cars)) //undefine