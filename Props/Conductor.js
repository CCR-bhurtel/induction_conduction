class Conductor {
  constructor(x, y, w, h, initialNegCharge, initialPosCharge) {
    this.position = createVector(x, y);
    this.width = w;
    this.height = h;
    this.negitive = initialNegCharge;
    this.positive = initialPosCharge;

    this.isDragging = false;
  }

  Start() {}

  Update() {
    this.render();
  }

  render() {
    push();
    noFill();
    stroke(0,200,0);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.width, this.height);
    pop();
  }

  // TODO Render conductor
}
