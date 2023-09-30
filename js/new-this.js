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
/*function Pizza() {
    console.log(`Making a pizza`);
}*/

//Create a new pizza
/*
const pepperoniPizza = Pizza();
console.log(pepperoniPizza); //undefined bc the function doesn't return anything
*/

/*
* With the new keyword, a new instance object of the function is created 
* instead of what is returned from the function
*/
/*
const pepperoniPizza = new Pizza();
console.log(pepperoniPizza); //returns an object with nothing bc nothing is added to it
console.log(pepperoniPizza.constructor); //Pizza() function that created this instance
*/

/*
* So when you log out the span.constructor you can see the HTMLSpanElement() {} function 
* that made it, and if you make a new instance of a function then view the constructor
* which is the Pizza() that made it
*/
//console.log(pepperoniPizza instanceof Pizza); //true
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
//Skip to "The value of this will change everytime you create new function within a function"
function tellMeAboutTheButton() {
    console.log(`outside`, this);
    setTimeout(function() {
      console.log(`inside`, this);
      this.textContent = "You Clicked Me";
    }, 1000);
}
/* function tellMeAboutTheButton() {
    console.log("outside", this);
  } */
button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);
//this is equal to each button element that was clicked
//these are both instances of the HTML button that is in the browser
/*
* The this keyword in our example is equal to the thing that is left of the dot. 
* The method that was called was addEventListener() 
* and the thing to the left of it was either button1 or button2 in our example.
*/
/*
* the tellMeAboutTheButton function is "bound to the button"
* This is where `implicit binding` comes into play
*/

//this is always scoped to a function
/* 
* Arrow Functions and this
* If I comment out the function above and instead change to an arrow function,
* this will log out the Window
* this is bc arrow functions not have their own scope in reference to the this keyword
* Also just as an additional note, arrow functions are always anonymous functions
* so we declare them as variables
*/

/*
* The value of this will change everytime you create a new function within a function
* setTimeout is a higher order function with one arguement as a callback function
* and the second arguement is how long the timeout should be
* the value of this outside the timeout is the button element,
* the value of this inside the timeout is the window
* If you need to be able to access the value of the this keyword within the tellMeABoutTheButton function, 
* you can use an arrow function because it will know not to change.
* then this content is <button class="one">Button 1 </button> outside
* and inside it's <button class="one">You Clicked Me</button>
*/
/*
function tellMeAboutTheButton () {
  console.log(`outside`, this);
  setTimeout(() => {
    console.log(`inside`, this);
    this.textContent = `You Clicked Me`;
  }, 1000);
}
*/

//this refers to the instance of the thing that was made
//Modify the Pizza() function, which is a constructor
function Pizza(toppings = [], customer) {
  console.log("Making a pizza");
  // save the toppings that were passed in to this instance of pizza
  //a function is assigned to create a randomized id for each pizza
  this.id = Math.floor(Math.random() * 16777215).toString(16);
  this.toppings = toppings;
  this.customer = customer;
  this.slices= 10;
  /*
  * Look first at instance then look at prototype
  * Goes with size of pizza declared as large later added to the prototype
  * But canadianPizza will show as "Medium"
  */
  //this.size = "Medium";
  /*
  this.eat = function() {
    if (this.slices > 0) {
      this.slices = this.slices -1;
      console.log(`CHOMP you now have ${this.slices} left!`);
    } else {
      console.log(`Sorry! No slices left`);
    }
  }
  */
}

//When you create a new instance, the this keyword is used to store information about that instance
const pepperoniPizza = new Pizza([`pepperoni`], `tauri`);
const canadianPizza = new Pizza([`candadian bacon`, `mushrooms`, `onion`], `danielle`);

/*
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();

console.dir(canadianPizza);
*/

/*
* But the eat function is duplicating for every instance of the pizza that we create,
* Which takes up memory and slows your website down
* We need to add the eat method to the prototype
*/

Pizza.prototype.eat = function() {
  if (this.slices > 0) {
    this.slices = this.slices -1;
    console.log(`CHOMP you now have ${this.slices} left!`);
  } else {
    console.log(`Sorry! No slices left`);
  }
};

//Pizza.prototype.size = `Large`;

canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();
canadianPizza.eat();

console.dir(canadianPizza);

//this identifier points to a particular object depending on how it's called
function foo () {
  console.log( this.bar );
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo //setting a function as a method in the obj that references the foo function in global
};

var obj2 = {
  bar: "obj2"
};

foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // undefined