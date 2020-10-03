class Induction {
  constructor() {
    this.rod = new EboniteRod(400, height / 2, 0, 0);
    this.conductor = new Conductor(width * 0.9, height / 2, 100, 100, 0, 0);

    this.rodPositionsTrack = [];
  }

  Start() {
    this.rod.Start();
    this.conductor.Start();
  }

  Update() {
    this.Render();
    if(this.checkCollision()) {
      this.rodPositionsTrack.push(this.rod.position);
      let PrevPos = this.rodPositionsTrack[this.rodPositionsTrack.length - 2] || this.rod.position;   
      if(this.rod.position.dist(PrevPos) >= 10) {
        this.rod.positive++;
        console.log(floor(this.rod.positive/10));
      } 
    }
  }

  Render() {
    this.conductor.Update();
    this.rod.Update();
  }
  checkCollision() {
    const r1x = this.rod.position.x - this.rod.width/2;
    const r1y = this.rod.position.y - this.rod.height/2;
    const r1w = this.rod.width;
    const r1h = this.rod.height;

    const r2x = this.conductor.position.x - this.conductor.width/2;
    const r2y = this.conductor.position.y - this.conductor.height/2;
    const r2w = this.conductor.width;
    const r2h = this.conductor.height

    if (r1x + r1w >= r2x &&    // r1 right edge past r2 left
      r1x <= r2x + r2w &&    // r1 left edge past r2 right
      r1y + r1h >= r2y &&    // r1 top edge past r2 bottom
      r1y <= r2y + r2h)
    {    // r1 bottom edge past r2 top
      
      return true;
    }
      this.rodPositionsTrack = [];
      return false;
  }
  // TODO check collision and add charges on based of collisions
}
