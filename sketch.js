var ball,img,paddle;
function preload() {
  ballImg=loadImage("ball.png");
  paddleImg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(30,180,10,10);
   ball.addImage("ball.png",ballImg);
   ball.velocityX=0;
   ball.velocityY=0;
   
  
   paddle=createSprite(370,180,10,10);
   paddle.addImage("paddle.png",paddleImg);
  
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  

  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  paddle.collide(edges); 
  
  if(keyDown("SPACE" ))
  {
     ball.velocityX=8;
     ball.velocityY=-8;
  }
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if (ball.x>400){
  ball.x=30;
  ball.y=5;
  ball.velocityX=0;
  ball.velocityY=0;  
  
  }
  
  drawSprites();
  
}



