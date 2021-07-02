var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeaf_image, apple_image;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeaf_image= loadImage("orangeLeaf.png");
  apple_image = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites=Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  drawSprites();
}

function createApples(){
var apples = createSprite(random(50,350),40,10,10);
apples.addImage("apple", apple_image);
apples.velocityY=2;
apples.scale=0.1;
apples.x=Math.round(random(10,60));
rabbit.depth=apples.depth;
apples.depth=apples.depth+1;
}

function createLeaves(){
var leaves = createSprite(random(50,350),40,10,10);
leaves.addImage("leave", orangeLeaf_image);
leaves.velocityY=2;
leaves.scale=0.1;
leaves.x=Math.round(random(70,350));
}