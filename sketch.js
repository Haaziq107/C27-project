const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof,rope;
var bobDiameter=50;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,50,600,20);
	//Create the Bodies Here.
	bob1 = new Bob(400,250,30);
	bob2 = new Bob(500,250,30);
	bob3 = new Bob(600,250,30);
	bob4 = new Bob(700,250,30);
	bob5 = new Bob(800,250,30);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body ,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*1,0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();
 
}

if(keyCode===32){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
}
