const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinImage;
var groundObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,1020,width,20);
	dustbinObj = new dustbin(800,650);
	Paper = new paper(200, 450, 70);
  var render = Render.create({ element: document.body,
  engine: engine,
  options: { width: 1600,
  height: 700,
  wireframes: false
  }});
	Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  Paper.display();
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 575, y: 3200});
    }
}

