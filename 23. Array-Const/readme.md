```
An array declared with const cannot be reassigned:

Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```
```
The keyword const is a little misleading.
It does NOT define a constant array. It defines a constant reference to an array.
```
```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```
```
Using const without initializing the array is a syntax error:

Example
This will not work:

const cars;
cars = ["Saab", "Volvo", "BMW"]; //syntax error. 
```
```
Arrays declared with var can be initialized at any time.

You can even use the array before it is declared:

Example
This is OK:

cars = ["Saab", "Volvo", "BMW"];
var cars;
```
```
Const block scope: 
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
```
```
An array declared with var does not have block scope:

Example
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
```
```
Redeclaring an array declared with var is allowed anywhere in a program:

Example
var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed
```
```
Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:

Example
var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}
```
```
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
```
```
const cars = ["Volvo", "BMW"];   // Allowed
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
{
  const cars = ["Volvo", "BMW"]; // Allowed
}
```
```

```
```

```
```

```
```

```
```

```
```

```
```

```
```

```
```

```