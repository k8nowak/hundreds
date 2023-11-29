let sqSize = 400;
let numSquares = 10;
let padding = 50;
let clickedNumber = null;

function setup() {
    createCanvas(sqSize+2*padding, sqSize+2*padding);
  }



function draw() {
  background(220); // Set background color

  let size = sqSize/numSquares; // Size of each square


  translate(padding,padding);

  let num = 1;
  textSize(14);
  textAlign(CENTER,CENTER);

  for (let y = 0; y < numSquares; y++) {
    for (let x = 0; x < numSquares; x++) {
      let xPos = x*size;
      let yPos = y*size;
      

// Check if num is a multiple of clickedNumber
if (clickedNumber !== null && num % clickedNumber === 0) {
  fill(100, 200, 255); // Color for multiples
} else {
  fill(255); // Default color
}

      rect(xPos, yPos, size, size); // Draw square
      fill(0);
      text(num, xPos+size/2, yPos+size/2);
      num++;

      
    }
  }

}

function mouseClicked() {
  let size = sqSize / numSquares;

  // Translate mouse coordinates
  let translatedX = mouseX - padding;
  let translatedY = mouseY - padding;

  if (translatedX >= 0 && translatedX < sqSize && translatedY >= 0 && translatedY < sqSize) {
    let xIndex = Math.floor(translatedX / size);
    let yIndex = Math.floor(translatedY / size);
    clickedNumber = yIndex * numSquares + xIndex + 1; // Calculate the clicked number
  }
}
