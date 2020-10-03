class Induction {
  constructor() {
    this.rod = new EboniteRod(400, height / 2, 0, 0);
    this.conductor = new Conductor(width * 0.9, height / 2, 100, 100, 0, 0);
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
  // TODO check collision and add charges on based of collisions
}
