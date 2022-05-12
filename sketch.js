const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var player;
var gameState = 0;
var ground1;

function preload(){
    
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    

    ground1 = createSprite(width/2,height-10,width,10);
    ground1.shapeColor = "red";

    ground2 = createSprite(width/2+300,height-200,width/2,10);
    ground2.shapeColor = "blue";

    ground3 = createSprite(width/2,height-400,width/4,10);
    ground3.shapeColor = "green";

    ground4 = createSprite(width/2-300,height-600,width/5,10);
    ground4.shapeColor = "orange";

    //JUGADOR
    player = createSprite(30,height-15,10,10);
    player.shapeColor = "white";

}

function draw(){
    background(0);
   

    if(gameState === 0 && keyDown("space")){
        gameState = 1;
    }

    if(gameState === 1){
        
        player.collide(ground1);
        player.collide(ground2);
        player.collide(ground3);
        player.collide(ground4);

        if(keyDown("left") || keyDown("a")){
            player.x -= 5;
    
        }
    
        if(keyDown("right") || keyDown("d")){
            player.x += 5;
    
        }

    
        if(keyDown("up") || keyDown("space")){
            
            player.velocityY -= 10;
    
        }
        player.velocityY = player.velocityY + 2;
       /*if(keyDown("down")){
            
            player.velocityY += 5;
    
        }*/
        if(player.y < 10){
            camera.position.y = player.y;
        }
    } 

       
      
    drawSprites();

  
}

function ground(){

}
