// Make a div
const sb = document.createElement('div')

// add a class of wrapper to it

sb.className = 'wrapper'
sb.textContent = 'This is my text for my div'

// put it into the body
console.log(sb)
document.body.appendChild(sb)
// make an unordered list

const unordered = document.createElement('ul')

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const ulHTML = unordered.textContent = `
    <li> one </li>
    <li> two </li>
    <li> three </li>
`;

const myFragment = document.createRange().createContextualFragment(ulHTML)

document.body.append(myFragment)



// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const sbImage = `
    <div class = 'wrapper'>
    <img src = 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250' alt = 'Cute Puppy' class = 'cute'></img>

    </div>
`;
const myImage = document.createRange().createContextualFragment(sbImage)
console.log(myImage)
console.log(myImage)
div.appendChild(myImage)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const newHTML = `<div> 
    <p>Para 1 </p>
    <p>Para 2 </p>
</div>`;

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {

};
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener