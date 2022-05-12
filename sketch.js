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
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(0,width-10,width,10);

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
        camera.position.y = player.y;

        if(keyDown("left")){
            player.x -= 5;
    
        }
    
        if(keyDown("right")){
            player.x += 5;
    
        }

    
        if(keyDown("up")){
            
            player.velocityY -= 5;
    
        }
    
        if(keyDown("down")){
            
            player.velocityY += 5;
    
        }
    } 

        //player.velocityY = player.velocityY + 1;

    drawSprites();

  
}