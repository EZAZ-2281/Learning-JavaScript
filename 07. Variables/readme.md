```
Variables are containers for storing values.
```
```
When to Use JavaScript var?
If you want your code to run in older browser, you must use var.
```
```
When to Use JavaScript const?
If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.
```
```
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ 
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
```
```
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
The "equal to" operator is written like == in JavaScript.
```
```
It's a good programming practice to declare all variables at the beginning of a script.
```
```
The variable carName will have the value undefined after the execution of this statement:

Example
let carName;
```
```
The variable carName will still have the value "Volvo" after the execution of these statements:

Example
var carName = "Volvo";
var carName;
```
```
You cannot re-declare a variable declared with let or const.

This will not work:

let carName = "Volvo";
let carName;
```
