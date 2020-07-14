class Bob {
    constructor(x, y, radius) {
      var options = {
      //isStatic:false,
      restitution:0.04,
      friction:0.3,   
      density:1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      //rotate(this.body.angle);
      ellipseMode(CENTER);
      fill("red");
      ellipse(0,0,this.radius*2,this.radius*2);
      pop();
    }
  };
