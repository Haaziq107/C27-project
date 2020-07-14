class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
    var pA=this.rope.bodyA.position;
    var pB=this.rope.bodyB.position;
    strokeWeight(4);

    var Anchor1X=pA.x
    var Anchor1Y=pA.y

    var Anchor2X=pB.x+this.offsetX
    var Anchor2Y=pB.y+this.offsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    
    }
    }