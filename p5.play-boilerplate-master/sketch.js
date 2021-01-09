var moving
var fixed
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  moving.y=mouseY;
moving.x=mouseX;
if(fixed.x-moving.x<fixed.width/2+moving.width/2&&moving.x-fixed.x<moving.width/2+fixed.width/2&&fixed.y-moving.y<fixed.height/2+moving.height/2&&moving.y-fixed.y<moving.height/2+fixed.height/2){
  moving.shapeColor="blue";
  fixed.shapeColor="green";
  
}
else {
  moving.shapeColor="purple";
  fixed.shapeColor="purple";
}

  drawSprites();
}