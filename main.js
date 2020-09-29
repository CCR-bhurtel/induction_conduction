let induction;
let Input;

window.addEventListener("load", () => {
    Input = new Input();
})


function setup(){
   createCanvas(windowWidth, windowHeight);

   induction = new Induction();
   induction.Start();
}

function draw() {
    background(0);
    induction.Update();
}
