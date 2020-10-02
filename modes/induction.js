class Induction {
    constructor() {
        this.rod = new EboniteRod(100, 100, 500, 50, 0, 0);
        this.conductor = new Conductor(400,600, 100, 100, 0, 0);
    }

    Start() {
        this.rod.Start();
        this.conductor.Start();
    }

    Update() {
        
        this.render();
    }

    render() {
        this.conductor.Update();
        this.rod.Update();
    }

    isCollided() {
    }

    // TODO check collision and add charges on based of collisions
}
