let time = new Date().getHours();
let gretting;
if (time < 10) {
    gretting = "Good Morning";
}
else if (time < 20) {
    gretting = "Good Day";
}
else {
    gretting = "Good Day";
}
console.log(gretting); 