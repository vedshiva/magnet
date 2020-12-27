const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof (400,60,700,30);
	
	ball1 = new Bob (250,360,20);
	ball2 = new Bob (290,360,20);
	ball3 = new Bob (330,360,20);
	ball4 = new Bob (370,360,20);
	ball5 = new Bob (410,360,20);

	rope1 = new Rope (ball1.body,roof.body,0,0);
	rope2 = new Rope (ball2.body,roof.body,40,0);
	rope3 = new Rope (ball3.body,roof.body,80,0);
	rope4 = new Rope (ball4.body,roof.body,120,0);
	rope5 = new Rope (ball5.body,roof.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();
  
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce (ball1.body,ball1.body.position,{x:-50,y:-40})
	
}