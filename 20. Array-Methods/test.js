let names = ["rahim", "karim", "abdul"]; 
console.log(names.toString()); 
console.log(names.join("*")); 
console.log(names.pop()); 
console.log(names);
names.push("abdul");  
console.log(names); 
/* The shift() method removes the first array element and "shifts" all other elements to a lower index. */
names.shift(); 
console.log(names); 
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: */
names.unshift("mottaki");
console.log(names); 

/* changing element */
names[1] = "dhaka"; 
console.log(names); 
console.log(names.length); 

/* delete an element
 */delete names[0]; 
console.log(names); //delete leaves undefined holes in the array

/* merging */
names2 = ["cumilla", "dhaka"]; 
names3 = names.concat(names2);
// names3 = names.concat("pabna"); also take a String. 
// names3 = names.concat(names2, names5, ...);
console.log(names3); 



/* Output: 
rahim,karim,abdul
rahim*karim*abdul
abdul
[ 'rahim', 'karim' ]
[ 'rahim', 'karim', 'abdul' ]
[ 'karim', 'abdul' ]
[ 'mottaki', 'karim', 'abdul' ]
[ 'mottaki', 'dhaka', 'abdul' ]
3
[ <1 empty item>, 'dhaka', 'abdul' ]
[ <1 empty item>, 'dhaka', 'abdul', 'cumilla', 'dhaka' ] */