const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var object;
var options;
var ball_options;
var ground;
var ball;

function setup() {
  createCanvas(400, 400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(200, 380, 400, 10, options);
  World.add(world, ground);

  ball_options = {
    restitution: 1.0,
  };
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}
