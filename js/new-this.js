// THE NEW KEYWORD
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

//*****Why isn't the new keyword needed for createElement?*****
//Create the ability to make a new pizza
function Pizza() {
    console.log(`Making a pizza`);
}
//Create a new pizza
/*
const pepperoniPizza = Pizza();
console.log(pepperoniPizza); //undefined bc the function doesn't return anything
*/

/*
* With the new keyword, a new instance object of the function is created 
* instead of what is returned from the function
*/
const pepperoniPizza = new Pizza();
console.log(pepperoniPizza); //returns an object with nothing bc nothing is added to it
console.log(pepperoniPizza.constructor); //Pizza() function that created this instance

/*
* So when you log out the span.constructor you can see the HTMLSpanElement() {} function 
* that made it
*/
console.log(pepperoniPizza instanceof Pizza); //true
//***** ******/