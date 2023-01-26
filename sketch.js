const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ground;
let towerImg, cannon, backgroundImg;
let angle;


function preload() {

towerImg = loadImage("assets/tower.png")
backgroundImg = loadImage("assets/background.gif")

  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world

  var options = {
   isStatic: true 
  }
  //angle = 15

  ground = Bodies.rectangle (0,599,1500,1,options)
  World.add(world,ground)

  tower = Bodies.rectangle (160,350,160,310, options)
  World.add(world,tower)

  cannon = new Cannon(180, 110, 130, 100, angle)

}


function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height)
  Engine.update(engine)
  
  rect(ground.position.x, ground.position.y, 1500, 1)

  push()
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 160,310)
  pop()

cannon.display();
}
