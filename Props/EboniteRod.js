class EboniteRod {
    constructor(x, y, w, h, initailNegCharge, initialPosCharge) {
        this.position = createVector(this.x, this.y);
        this.width = w;
        this.height = h;
        this.negitive = initailNegCharge;
        this.positive = initialPosCharge;

        this.isDragging = false;
    }

    Start() {
        
    }

    Update() {
        if (Input.onMouseClicked(this) && Input.currentlySelected().length - 1 === 0) {
            this.isDragging = true;
        }
        if(Input.onMouseReleased()) {
            this.isDragging = false;
        }

        if(this.isDragging) {
            this.position = createVector(mouseX, mouseY)
        }
        this.render();
    }

    render() {
        push()
        fill(255);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, this.width, this.height);
        pop();
    }
}
