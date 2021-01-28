    Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(1100, 800);

  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(240,700,2000,20);
  division0 = new Division(10,540,10,300) 
  division1 = new Division(140,540,10,300)
  division2 = new Division(280,540,10,300)
  division3 = new Division(420,540,10,300)
  division4 = new Division(560,540,10,300)
  division5 = new Division(700,540,10,300)
  division6 = new Division(840,540,10,300)
  division7 = new Division(980,540,10,300)


 
    
}
 
function draw() {
  background(0);  
  Engine.update(engine);

  noStroke(200);
  textSize(35)
  fill("white")
  text("Score  " + score, 50, 50)
  text("500",45,450)
  text("500",180,450)
  text("100",315,450)
  text("100",450,450)
  text("100",585,450)
  text("100",720,450)
  text("200",875,450)

  ground.display()
  division0.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()  
  division6.display()  
  division7.display() 

  Engine.update(engine);
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  if(particle!=null)
  {
  particle.display();

  if (particle.body.position.y>599)
  {
  if (particle.body.position.x < 300) 
  {
  score=score+500;      
  particle=null;
  if ( count>= 5) gameState ="end";                          
  }


  else if (particle.body.position.x < 350 && particle.body.position.x > 301 ) 
  {
  score = score + 100;
  particle=null;
  if ( count>= 5) gameState ="end";

  }
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
  {
  score = score + 200;
  particle=null;
  if ( count>= 5)  gameState ="end";

  }      

  }

  }

  for (var k = 0; k < divisions.length; k++) 
  {
  divisions[k].display();
  }

  }


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}