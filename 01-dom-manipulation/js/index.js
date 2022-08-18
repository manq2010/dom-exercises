// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

// a <p> with red text that says “Hey I’m red

const p = document.createElement('p')
p.textContent = "Hey i'm red";
p.style.color = 'red'
container.appendChild(p)

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3"
h3.setAttribute('style', 'color: blue;')
container.append(h3)

// a <div> with a black border and pink background color with the following elements inside of it:
// 1) another <h1> that says “I’m in a div”
// 2)  <p> that says “ME TOO!”
// 3) Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const sectionDiv = document.createElement('div')
sectionDiv.classList.add('section')
const h1Section = document.createElement('h1')
const pSection = document.createElement('p')

sectionDiv.setAttribute('style', 'backgroud-color: blue; border: black solid 2px')
h1Section.textContent = "I’m in a div"
pSection.textContent = "ME TOO"

sectionDiv.appendChild(h1Section)
sectionDiv.appendChild(pSection)

container.appendChild(sectionDiv)