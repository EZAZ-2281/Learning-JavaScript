```
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```
```
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```
```
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```
```
Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;
```
```
let x = "10";
let y = "20";
let z = x + y;
output: 1020
```
```
let x = 10;
let y = "20";
let z = x + y;
output: 1020
```
```
A common mistake is to expect this result to be 30:

Example
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
output: The result is: 1020
```
```
A common mistake is to expect this result to be 102030:

Example
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; //3030
```
```
This will work:
let x = "100";
let y = "10";
let z = x / y; //10

This will also work:
let x = "100";
let y = "10";
let z = x * y; //1000

And this will work:
let x = "100";
let y = "10";
let z = x - y; //90

But this will not work:
let x = "100";
let y = "10";
let z = x + y; //10010
```
```
let x = 100 / "Apple";
output: NaN
```
```
let x = 100 / "10"; //10
```
```
let x = 100 / "Apple";
isNaN(x); //true
```
```
let x = NaN;
let y = 5;
let z = x + y; //NaN
```
```
let x = NaN;
let y = "5";
let z = x + y; //NaN5
```
```
NaN is a number: typeof NaN returns number:

Example
typeof NaN;
```
```
let x =  2 / 0; //infinity
let y = -2 / 0; //-infinity
```
```
Infinity is a number: typeof Infinity returns number.

Example
typeof Infinity;
```
```
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example
let x = 0xFF; //255
```
```
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
output: 
Decimal 32 =

Hexatrigesimal (base 36): w
Duotrigesimal (base 32): 10
Hexadecimal (base 16): 20
Duodecimal (base 12): 28
Decimal (base 10): 32
Octal (base 8): 40
Binary (base 2): 100000
```
```
let x = 123; //number
let y = new Number(123); //object
```
```
When using the == operator, x and y are equal:

let x = 500;
let y = new Number(500); //return true
```
```
let x = 500;
let y = new Number(500); //return false
```
```
(x == y) true or false? //false
let x = new Number(500);
let y = new Number(500);

(x === y) true or false? //false
let x = new Number(500);
let y = new Number(500);

Note: Comparing two JavaScript objects always returns false.
```