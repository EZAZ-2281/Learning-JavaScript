```
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.
```
```
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared
```
```
var দিয়ে redeclare যাবে
var x = "John Doe";
var x = 0;
```
```
Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here
```
```
{
  var x = 2;
}
// x CAN be used here
```
```
var x = 10;
// Here x is 10
{
    var x = 2;
    // Here x is 2
}
// Here x is 2
```
```
let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10
```
```
Redeclaring a variable with let, in another block, IS allowed:
let x = 2;    // Allowed

{
    let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}
```
```
With let, redeclaring a variable in the same block is NOT allowed:

Example
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
var x = 3     // Not allowed
}
```
```
let carName;
document.getElementById("demo").innerHTML = carName; //undefined
```
```
```