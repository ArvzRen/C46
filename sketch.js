const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var player;
var gameState = 0;
var ground, ground1;

var groundGroup;

function preload(){
    
}


function setup(){
    createCanvas(windowWidth,windowHeight);

     //JUGADOR
     player = createSprite(30,height-15,10,10);
     player.shapeColor = "white";
    
    groundGroup = createGroup();

    ground1 = createSprite(width/2,height-10,width,10);
    ground1.shapeColor = "red";

    grounds();
    groundGroup.collide(player);

   

}

function draw(){
    background(0);
    

    if(gameState === 0 && keyDown("space")){
        gameState = 1;
    }

    if(gameState === 1){
        
        player.collide(ground1);
               

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
        if(keyDown("down")){
            
            player.y += 5;
    
        }
        if(player.y < 10){
            camera.position.y = player.y;
        }
    } 

       
      
    drawSprites();

  
}

function grounds(){
    var H = height-10;

    for(var i=0; i<20; i++){
        ground = createSprite(Math.round(random(0,width)),H-200*i,300,10);
        groundGroup.add(ground);
    }
}
