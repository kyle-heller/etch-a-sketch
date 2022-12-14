// Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
// float/clear
// inline-block
// flexbox
// CSS Grid
// Be careful with borders and margins, as they can adjust the size of the squares!
// “OMG, why isn’t my grid being created???”
// Did you link your CSS stylesheet?
// Open your browser’s developer tools.
// Check if there are any errors in the JavaScript console.
// Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
// Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.
// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.


const currentDiv = document.getElementById("container");

function generateRGB() {
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
  return `rgb(${r}, ${g}, ${b})`
}


let globaltotal = 0;


    window.addEventListener('mouseover', function(e) { //listens for mouseover on grid divs and sets color to color
        for (let i = 0; i < globaltotal; i++) {
            if (e.target === document.getElementById(`divcube${i}`)) {
                const j = document.getElementById(`divcube${i}`)
                // j.style.backgroundColor = 'black' //for black
                
              j.style.backgroundColor = generateRGB() //for random RGB 
        }
        }
    })




    function createBoxes(numberPerRow) {
        const currentDiv = document.querySelector('#container');
        const total = (numberPerRow * numberPerRow) + numberPerRow;
        const mod = numberPerRow + 1;
        let boxSize = (750 / (numberPerRow)) + 'px';
        globaltotal = total

        for (let i = 1; i < total; i++) {
          const newDiv = document.createElement('div');
          newDiv.setAttribute("id", `divcube${i}`)
          if (i % mod === 0) {
            newDiv.style.cssText = "border: 0; height: 0; width: 100%";
          } else {
            newDiv.style.cssText = `border: 1px solid black; height: ${boxSize}; width: ${boxSize}`;
          }
      
          currentDiv.appendChild(newDiv);
        }
      }

createBoxes(16);
      

function clearBoxes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.querySelector('.gridbutton').addEventListener('click', function() {
    let a = prompt("What size?");
    if ((a < 100) && (a > 0)) {
    clearBoxes(currentDiv)
    createBoxes(Number(a))
    }
    else if (a > 100) {
    return;
    }
})


