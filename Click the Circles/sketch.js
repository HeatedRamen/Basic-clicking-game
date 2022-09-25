let lives = 3;
let lost = 0;
let hit = 0;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  circle = new Circle;
  circle.create();
}

function draw() {
  for (var i = 0; i < lives; i++) {
    hearts(15 + (i * 30), 15, 20, 255);
    displayScore(hit);
  }
}


function mousePressed() {
  if (circle.contains(mouseX, mouseY) && lives > 0) {
    background(0);
    circle.create();
    hit++;
  }
  else {
    if (lives == 0) {
      background(0);
      finalScore(hit);
    }
    else {
      lives = lives - 1;
    }
  }
}