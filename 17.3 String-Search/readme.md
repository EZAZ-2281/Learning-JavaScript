```
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15); //21
```
```
The lastIndexOf() methods searches backwards (from the end to the beginning)
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate", 15); //7
```
```
let str = "Please locate where 'locate' occurs!";
str.search("locate"); //7
```
```
The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
```
```
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); //ain,ain,ain
```
```
Perform a global, case-insensitive search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi); //ain,AIN,ain,ain
```
```
let text = "Hello world, welcome to the universe.";
text.includes("world"); //true
```
```
let text = "Hello world, welcome to the universe.";
text.includes("world", 6); //true
//orthat 6 tomo index hoty deka suru korby j world asy kina.
//7 dile return korto false.  
```
```
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello"); //true
```
```
let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)    // Returns false

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)    // Returns true
```
```
let text = "John Doe";
text.endsWith("Doe"); //true
```
```
Check if the 11 first characters of a string ends with "world":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11); //true
```