class Ball5 {
    constructor(x, y, w, h) {
      let options = {
        restitution: 0.8
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.ball5 = loadImage("assets/ball1.png") 
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
      image(this.ball5,-58, -55,120,120)
      pop();
    }
  }
  