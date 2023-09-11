var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);
var ball_options={
	isStatic:true,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(100,50,50[options])
World.add((world,this.body))

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  goundObj.display();
  drawSprites();
 groundObj=new ground(width/2,670,width,20)
 leftSide = new ground(1100,600,20,120)
}

function keyPressed(){
	if (keyCode === UP_ARROW){


		
	}
}


