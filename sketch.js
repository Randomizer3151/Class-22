var movingRect;
var stillRect;
var gameObject1 ;

var gameObject2, gameObject3;
function setup() {
  createCanvas(800,600);
  movingRect=createSprite(400,200,80,30);
  stillRect=createSprite(200,200,50,80);
  movingRect.shapeColor="teal";
  stillRect.shapeColor="teal";

  gameObject1 = createSprite(100, 100, 50,50);
  gameObject1.shapeColor="teal";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="purple";
  gameObject2.velocityX = 3;

  gameObject3 = createSprite(500,100,50,50);
  gameObject3.shapeColor="green";
  gameObject3.velocityX = -3;
}

function draw() {
  background(0);
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
 }
 else{
    movingRect.shapeColor="teal";
    gameObject1.shapeColor="teal";
 }

bounceOff(gameObject2,gameObject3);
 
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2
  
    ){
    return true;
   }
   else{
   return false;
  }
}


function bounceOff(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2
  
    ){
    
      object1.velocityX = object1.velocityX * -1;
      object1.velocityY = object1.velocityY * -1;
      object2.velocityX = object2.velocityX * -1;
      object2.velocityY = object2.velocityY * -1;
   }
  }