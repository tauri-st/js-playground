//myDate is an instance of the Date constructor
const myDate = new Date(`August 11, 2025`);
console.log(myDate);
console.dir(myDate);
console.log(myDate.getFullYear());

console.log(typeof myDate); //object
console.log(myDate instanceof Date); //true