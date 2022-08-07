let a = "Golam kibria";
console.log(a.length);
console.log(a.slice(1, 3)); //ol
console.log(a.slice(-3, -1)); //ri
console.log(a.slice(3)); //am kibria (slice out the rest of the string)
console.log(a.slice(-3)); //ria
console.log(a.substring(1, 3)); //ol
console.log(a.substring(3)); //am kibria
console.log(a.substr(1, 3)); //ol
console.log(a.substr(3)); //am kibria
console.log(a.substr(-4)); //bria
console.log(a.replace("kibria", "ezaz")); //replace method is case sensetive by default. 
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(a.replace(/KIBRIA/i, "Ezaz"));
// To replace all matches, use a regular expression with a /g flag (global match). 
console.log(a.toUpperCase()); 
console.log(a.toLowerCase()); 
let b = " Ezaz"; 
console.log(a.concat(b)); 
console.log(a + b); 
console.log(b.trim()); //remove the white space. 
let c = "5"
console.log(c.padStart(4, "x")); //xxx5
console.log(c.padEnd(4, "x")); //5xxx
console.log(c.padStart(5, "x")); //xxxx5

//for padding convert the number to string first
let d = 10; 
let text = d.toString(); 
console.log(text.padStart(4, "x")); //xx10

console.log(a.charAt(3)); //a
console.log(a.charCodeAt(3)); //97
console.log(a[3]); //a this is called property access

/*Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string. */

console.log(a.split(" ")); //['Golam', 'kibria']
/*  text.split(" ")    // Split on spaces
    text.split("|")    // Split on pipe 
    text.split("")     // array of a single character */