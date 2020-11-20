const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;
	
  Engine.run(engine);
  


  ground1 = new Ground(100,790,800,20)
  division1 = new Division(460,790,20,60)


}

function draw() {
  background(205); 

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight=300


  ground1.display()
  division1.display()

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10, divisionHeight));
  }
}