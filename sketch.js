var movingRect
var nonMovingRect
var target1
var target2, target3, target4
function setup() {
  createCanvas(800,400);

  createEdgeSprites();
  
  target1=createSprite(200, 50, 50, 50);
  target1.shapeColor="red";
  target2=createSprite(300, 200, 50, 50);
  target2.shapeColor="red";

  target3=createSprite(500, 200, 50, 50);
  target3.shapeColor="red";

  target4=createSprite(200, 200, 50, 50);
  target4.shapeColor="red";

  nonMovingRect=createSprite(400, 200, 50, 50);

  nonMovingRect.shapeColor="red";

  movingRect=createSprite(600, 200, 80, 50);

  movingRect.shapeColor="red";
  
  target1.velocityY=5;
  target4.velocityY=-5;

}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  //console.log(.x-nonMovingRect.x);
  if(isTouching(target4, movingRect))
  {
    movingRect.shapeColor="blue";
    target4.shapeColor="blue";
  }
  else
  {
    movingRect.shapeColor="red";
    target4.shapeColor="red";
  }
  bounceOff(target1, target4);
  drawSprites();
}
