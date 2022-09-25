function hearts(x, y, size, color) {
  fill(color, 0, 0);
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function displayScore(x) {
  x *= 1000;
  fill(255);
  stroke(1);
  textSize(25);
  textAlign(CENTER);
  text("Score: " + x, width - 100, 31);
}

function finalScore(x) {
  x *= 1000;
  fill(255);
  textSize(100);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  textSize(50);
  text("Score: " + x, width / 2, (heigth / 2) - 100);

}