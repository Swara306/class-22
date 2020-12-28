
//namespacing or nicknaming
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//engine and world for angryBird
var engine,world;
var ground,ball;

function setup() {
  
var canvas= createCanvas(400,400);
 
//initialized game engine from Matter.Engine
engine=Engine.create();
world =engine.world;

//properties of the ground
objectOptions ={
  isStatic:true
}
//created an object ground that is a rectangle
ground = Bodies.rectangle(200,390,400,20,objectOptions);
//added the ground and the world to the main world
World.add(world,ground);

ballOptions = {
  restitution:0.8
}
//created an object ball that is a circle
ball = Bodies.circle(200,150,20,ballOptions);
//added the ball and the world to the main world
World.add(world,ball);

//to see properties of object in console
console.log(ground);

}

function draw() {

  //to clear screen and give color
  background(0); 
  //updating my engine 
  Engine.update(engine);
  // making x and y co-ordinates as the center of the rectangle
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}