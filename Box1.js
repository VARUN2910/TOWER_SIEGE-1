class Block1{
  constructor(x, y, width, height, angle) {
      var options = {
          'isStatic':false,
          'restitution':0,
          'friction':1.0,
          'density':0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255, 192, 203);
      rect(0,0, this.width, this.height);        pop();
    }
}