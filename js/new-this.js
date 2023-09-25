//myDate is an instance of the Date constructor
const myDate = new Date(`August 11, 2025`);
console.log(myDate);
console.dir(myDate);
console.log(myDate.getFullYear());

console.log(typeof myDate); //object
console.log(myDate instanceof Date); //true

/* 
* Same with arrays, but we don't have to use the new keyword
* Arrays allow for 'literal syntax' which means the new keyword isn't necessary
* Date objects do not have literal syntax
*/
const names = [`tauri`, `danielle`];
console.log(typeof names);
console.log(names instanceof Array);