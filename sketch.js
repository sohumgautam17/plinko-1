const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, division, division1, division2, division3, division4, division5, division6, plinkos;

var particles = [];
var  plinkos = [];

var divisions = [];


var divisionHeight =300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 799, 480, 10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
 
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }
  

  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display(); 
  //console.log("hiiiiii")
 
  for (var i = 0; i < plinkos.lenght; i++){
    console.log("here i am")
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 
}