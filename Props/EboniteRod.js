class EboniteRod {
  constructor(x, y, initailNegCharge, initialPosCharge) {
    this.position = createVector(x, y);
    this.height = EboniteRodImage.width - 165;
    this.width = EboniteRodImage.height - 10;
    this.negitive = initailNegCharge;
    this.positive = initialPosCharge;

    this.isDragging = false;
  }

  Start() {}

  Update() {
    if (
      Input.onMouseClicked(this) &&
      Input.currentlySelected().length - 1 === 0
    ) {
      this.isDragging = true;
    }
    if (Input.onMouseReleased()) {
      this.isDragging = false;
    }

    if (this.isDragging) {
      this.position = createVector(mouseX, mouseY);
    }
    this.render();
  }

  render() {
    push();
    fill(255);
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(PI / 2);
    image(EboniteRodImage, 0, 0);
    pop();
  }

  renderColliderBorder() {
    push();
    noFill();
    stroke(0, 200, 0);
    translate(this.position.x, this.position.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
