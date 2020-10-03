let induction;
let Input;

let EboniteRodImage;
let NegativeChargeImage;
let PositiveChargeImage;
let GlassRodImage;
let SphereImage;

let testCharge;
window.addEventListener("load", () => {
  Input = new inputSystem();
});

function preload() {
  EboniteRodImage = loadImage("./Images/EboniteRod.svg");
  PositiveChargeImage = loadImage("./Images/PositiveCharge.svg");
  NegativeChargeImage = loadImage("./Images/NegativeCharge.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  EboniteRodImage.resize(
    EboniteRodImage.width * 1.3,
    EboniteRodImage.height * 1.3
  );

  induction = new Induction();
  induction.Start();

  testCharge = new Charge(width / 2, height / 2, -1);
}

function draw() {
  background(0);
  induction.Update();
  Input.Update();
  testCharge.Update();
}

function mouseReleased() {
  Input.mouseReleased = true;
}
