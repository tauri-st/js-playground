// **How are Date and createElement different here where one needs the new keyword and the other does not??
// THE NEW KEYWORD
//myDate is an instance of the Date constructor
const myDate = new Date(`August 11, 2025`);
console.log(myDate);
console.dir(myDate);
console.log(myDate.getFullYear());

console.log(typeof myDate); //object
console.log(myDate instanceof Date); //true
console.log(myDate.constructor);

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

console.log(span instanceof HTMLSpanElement); //true
console.log(span instanceof Node); //true
//Classes and extending
/*
* things can start very basic like a node with text. 
* Then it can go a little further and become an element, and have a tag and attributes. 
* And then it can go even further and become a special kind of element like an image or div. 
* In all of those cases, the element inherits the Node 
* and the HTMLSpanElement inherits the Element.
*/

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
* that made it, and if you make a new instance of a function then view the constructor
* see the Pizza() that made it
*/
console.log(pepperoniPizza instanceof Pizza); //true
//***********/

// THE THIS KEYWORD
//The this keyword refers to the instance of an object that a function is bound to

//Wes Bos has definied 'this' as 'what is left of the dot when you are calling a method'
const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

//Skip to "Arrow Functions and this" for notes about this part
/* const tellMeAboutTheButton = () => {
    console.log("outside", this);
  } */
function tellMeAboutTheButton() {
    console.log("outside", this);
  }
button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);
//this is equal to each button element that was clicked
//these are both instances of the HTML button that is in the browser
/*
* The this keyword in our example is equal to the thing that is left of the dot. 
* The method that was called was addEventListener() 
* and the thing to the left of it was either button1 or button2 in our example.
*/
//the tellMeAboutTheButton function is "bound to the button"

//this is always scoped to a function
/* 
* Arrow Functions and this
* If I comment out the function above and instead change to an arrow function,
* this will log out the Window
* this is bc arrow functions not have their own scope in reference to the this keyword
* Also just as an additional note, arrow functions are always anonymous functions
* so we declare them as variables
*/
