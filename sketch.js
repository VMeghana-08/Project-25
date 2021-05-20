
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var dustbin,paper,ground;
function preload()
{
	dustbinImage = loadImage("Sprites/dustbingreen.png");
  paperImage = loadImage("Sprites/paper.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,height,width,40);
 
  
  
  dustbin=new Dustbin(570,520,100,120);
 
  
  paper=new Paper(100,320,50,50);
  
  
  paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
  World.add(world, paperBody);
 
 

	Engine.run(engine);
  
}


function draw() {
  


  rectMode(CENTER);
  background(255); 
  Engine.update(engine);

 
 paper.display();
 ground.display();
  
  
  paper.display();
  dustbin.display();

  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-55});
  }
}



