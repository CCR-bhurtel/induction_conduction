let induction;
let Input;

window.addEventListener("load", () => {
    Input = new inputSystem()
})


function setup(){
   createCanvas(windowWidth, windowHeight);

   induction = new Induction();
   induction.Start();
}

function draw() {
    background(0);
    induction.Update();
    Input.Update();

    console.log(Input.currentlySelected().length)
}


function mouseReleased() {
    Input.mouseReleased = true;
}
