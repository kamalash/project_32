class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.ball1 = loadImage("assets/ball2.png") 
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    image(this.ball1,-58, -55,120,120)
    pop();
  }
}
