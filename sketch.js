const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var box1,box2;
function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

box1=new Box(300,300,50,50);
ground=new Ground(200,380,380,5);
box2=new Box(250,100,50,50);
}

function draw() {
  background(0);  
  Engine.update(engine);
//console.log(box2.body.position.x,box2.body.position.y,box2.body.angle)
  box1.display();
  ground.display();
  box2.display();
}