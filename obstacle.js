class obstacle {
  constructor(){
    this.pos = createVector(random(width), random(height-10));
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0,0);
    this.val=1;
    this.col= color("green")
  }
  
  show(){
    fill(this.col);
    rect(this.pos.x,this.pos.y, 15,15)
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
