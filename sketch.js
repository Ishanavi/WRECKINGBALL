const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;

function preload() {

    bgImage = loadImage("bg.jpg")
   
}

function setup(){
     createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,590)
    ball = new Ball(500,300,40)

    building = new Box(600,420,120,320)
    building2= new Box(750,395,100,370)
    building3= new Box(880,425,110,310)

   sling = new SlingShot(ball.body,{x:500,y:300})
}

function draw(){
    background(bgImage)

    Engine.update(engine);

    ground.display();
    ball.display()
    building.display()
    building2.display()
    building3.display()
    sling.display()
   
}



function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


