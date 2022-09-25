class Circle {
  constructor() {
    this.x;
    this.y;
    this.r = 50;
  }
  contains(x, y) {
    let d = dist(x, y, this.x, this.y)
    if (d < this.r) {
      return true;
    }

  }
  create() {
    stroke(255);
    strokeWeight(2);
    noFill();
    this.x = random(150, width - 150);
    this.y = random(150, height - 150);
    ellipse(this.x, this.y, this.r * 2);
  }

}

