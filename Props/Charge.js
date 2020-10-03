class Charge {
  constructor(x, y, magnitude) {
    this.position = createVector(x, y);
    if (magnitude > 0) {
      this.chargeType = "positive";
    } else {
      this.chargeType = "negative";
    }

    PositiveChargeImage.resize(20, 20);
    NegativeChargeImage.resize(20, 20);
  }
  Start() {}
  Update() {
    this.Render();
  }
  Render() {
    let renderImage =
      this.chargeType === "positive"
        ? PositiveChargeImage
        : NegativeChargeImage;

    push();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(renderImage, 0, 0);
    pop();
  }
}
