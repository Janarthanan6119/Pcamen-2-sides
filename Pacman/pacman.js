// pos is the PacMan image position variable
var pos = 0;
//pageWidth is the width of the webpage.  
let pageWidth = window.innerWidth;
//This array contains all the PacMan images
const pacArray = 
[
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function to move pacman images...
function Run() 
{
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
  
setInterval(Run,200)
// The function which can detect the window border and 
// return the pacman to start position... 
function checkPageBounds(direction, imgWidth, pos, pageWidth) 
{
  pageWidth = window.innerWidth;
  if (direction == 0 && pos + imgWidth > pageWidth)
  {direction = 1;}
  if (direction == 1 && pos < 0)
  {direction = 0;}
  
  return direction;
}