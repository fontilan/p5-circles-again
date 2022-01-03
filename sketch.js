//Script to generate the purplish holy mountain
//
//
// function setup() {
//   canvasSize = min(windowWidth * 0.65, windowHeight * 0.65);
//   createCanvas(canvasSize, canvasSize);
//   background(14, 14, 14);
//   frameRate(12);
// }

// let posX = 0;
// let poxY = 0;
// let radius = 10;

// let blue = 255;
// let red = 255;
// let green = 255;

// let weight = 2;

// function draw() {
//   noFill();
//   stroke(red, green, blue);
//   strokeWeight(weight);
//   circle(canvasSize / 2 + posX, canvasSize / 2 + poxY, radius, radius);

//   radius += 15;
//   poxY = poxY + 4;

//   red -= 2;
//   green -= 4;
//   blue -= 1;

//   weight -= 0.005;
// }

function setup() {
  canvasSize = min(windowWidth * 0.65, windowHeight * 0.65);
  createCanvas(canvasSize, canvasSize);
  background(240);
  stroke(14);
  frameRate(12);
  noFill();
}

let radius = 30;
let weight = 2;

function draw() {
  strokeWeight(weight);
  circle(canvasSize / 4, canvasSize / 2, radius, radius);

  strokeWeight(weight / 2);
  circle((canvasSize * 3) / 4, canvasSize / 2, radius, radius);

  radius += 60;
}
