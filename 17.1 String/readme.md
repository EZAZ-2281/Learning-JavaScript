```
Breaking Long Code Lines
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"Hello Dolly!";
</script>
```
```
You can also break up a code line within a text string with a single backslash:

Example
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
```
```
A safer way to break up a string, is to use string addition:

Example
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
```
```
(x == y) true or false?
ans: false
let x = new String("John");
let y = new String("John");
```
```
(x === y) true or false?
ans: flase cuz js object can't be compared. 
let x = new String("John");
let y = new String("John");
```