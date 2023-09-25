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

/*
* Same thing is happening when creating an element
*/
const span = document.createElement(`span`);
console.log(span); //<span></span>
console.log(span instanceof Element); //true
console.log(span.constructor);
console.dir(span.constructor);

console.log(span instanceof HTMLSpanElement);
console.log(span instanceof Node);
//Classes and extending
/*
* things can start very basic like a node with text. 
* Then it can go a little further and become an element, and have a tag and attributes. 
* And then it can go even further and become a special kind of element like an image or div. 
* In all of those cases, the element inherits the Node 
* and the HTMLSpanElement inherits the Element.
*/