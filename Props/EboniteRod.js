class EboniteRod {
    constructor(x, y, w, h, initailNegCharge, initialPosCharge) {
        this.position = createVector(this.x, this.y);
        this.width = w;
        this.height = h;
        this.negitive = initailNegCharge;
        this.positive = initialPosCharge;
    }

    Start() {
        
    }

    Update() {
        this.render();
    }

    render() {
        fill(255);
        rect(70, 30, 10, 50 );
    }
}