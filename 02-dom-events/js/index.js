// Method 1

const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert("Hello World, Method 2");

// Method 3

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World, Method 3");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHOD 2
btn1.onclick = alertFunction;

// METHOD 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);

// Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
    console.log(e);
  });

// With all three methods we can access more information about the event by passing a parameter to the function that we are calling. Try this out on your own machine:

// *Note that function (e) is a callback from addEventListener.

btn5.addEventListener('click', function (e) {
    console.log(e.target);
  });

//   The e in that function is an object that references the event itself. Within that object you have access to many useful properties and functions such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.

btn6.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

//   Attaching Listeners to Groups of Nodes

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

// Some useful events include:

// click
// dblclick
// keydown
// keyup