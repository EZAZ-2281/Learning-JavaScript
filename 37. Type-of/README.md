```
In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined
```
```
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null 
```
```
Please observe:

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined *
```
```
The typeof operator returns "object" for arrays because in JavaScript arrays are objects.
```
```
let car;    // Value is undefined, type is undefined

```
```
car = undefined;    // Value is undefined, type is undefined

```
```
let car = "";    // The value is "", the typeof is "string"

```
```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
```
```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = undefined;   // Now both value and type is undefined
```
```
undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```
```
These will not convert:

Number("99 88")
Number("John")
//output will return not a number. 
```
```
String(false)      // returns "false"
String(true)       // returns "true"
The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"
```
```

```
```

```