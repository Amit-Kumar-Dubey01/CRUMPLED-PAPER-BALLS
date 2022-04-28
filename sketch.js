
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, left, right, ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400, 670, 800, 20)
	left = new Ground(600,600,20,120)
	right = new Ground(750,600,20,120)

	var options = {
		restitution : 0.5,
		friction : 0,
		density : 1.2,

	} 
	ball = Bodies.circle(50,200,20, options);
	World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);


  	ground.show()
	left.show()
	right.show()

	
}


function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:40,y:-40});
	}
}
