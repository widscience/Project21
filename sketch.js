var wall, thickness;
var bullet, weight, speed;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80)

}

function draw() {
  background(0,0,0);  

  bullet.collide(wall);

  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
    
     var damage = (0.5*weight*speed*speed) / (thickness*thickness*thickness) ;

  if (damage > 10){
    wall.shapeColor = ("red");
  }
  else if (damage <= 10) {
    wall.shapeColor = ("green");
  }
  console.log(damage);
}
  
  //collide(bullet, wall);

  //fill("white");
  //Text("damage =" + damage, 800,50);
  drawSprites();
}