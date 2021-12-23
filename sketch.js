const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var ball1
var player1



function setup() {
  var canvas = createCanvas(500, 500);


  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  ball6 = new Ball5(175,130,80,80)
  player1 = new player(50,100,50,50)
  blower = new Blower(width / 2 - 100, height / 2 + 50, 350, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  //player = createSprite(100,100,50,50)
  //player.setAnimation(player1);

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();

}

function draw() {
  background(59);
  Engine.update(engine);
  player1.show();
  blower.show();
  ball.show();
  ball6.show();
  blowerMouth.show();
  drawSprites();
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
  Matter.Body.applyForce(ball6.body, {x:0, y:0}, {x:0, y:-0.05});

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}

