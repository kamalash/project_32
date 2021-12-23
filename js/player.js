class player {
    constructor(x, y, w, h) {
      
  
      this.body = Bodies.rectangle(x, y, w, h);
      this.w = w;
      this.h = h;
      this.player = loadImage("assets/player.png") 
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      image(this.player,-100, -150,200,200)
      pop();
    }
  }
  