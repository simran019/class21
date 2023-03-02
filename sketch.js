const Engine=Matter.Engine
//namespacing
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var myengine;
var myworld;

var ground;

var bottomGround;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

  bottomGround=new Ground(200,390,400,20)

  // var ground_options={
  //   isStatic:true
  // }
  // ground=Bodies.rectangle(200,380,400,20,ground_options);
  // World.add(myworld,ground);
}

function draw() 
{
  background(51);
  // fill("green")
  // rectMode(CENTER);
  // rect(ground.position.x,ground.position.y,400,20);

  bottomGround.show()
  Engine.update(myengine);
}


