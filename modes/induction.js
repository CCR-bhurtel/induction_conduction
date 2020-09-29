class Induction {
    constructor() {
        this.rod = new EboniteRod(0,0,0,0,0,0);
        this.conductor = new Conductor(0,0,0,0,0,0);
    }

    Start() {
        this.rod.Start();
        this.conductor.Start();
    }

    Update() {
        this.render();
    }

    render() {
        this.rod.Update();
        this.conductor.Update();
    }

    isCollided() {
    }

    // TODO check collision and add charges on based of collisions
}
