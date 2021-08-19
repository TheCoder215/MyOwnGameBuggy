var boy
var apple, bread, cheese, fries, lettuce
var bg

var boySprite
var bgSprite

function preload(){

  boy = loadAnimation("1e.png","2e.png","3e.png","4e.png","5e.png","6e.png","7e.png","8e.png")
  // boy animation 

  apple = loadImage("apple.png")
  bread = loadImage("bread.png")
  cheese = loadImage("cheese.png")
  fries = loadImage("french fries.png")
  lettuce = loadImage("lettuce.png")
  // food pictures

  bg = loadImage("background.png")
  // background image

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bgSprite = createSprite(100,200);
  bgSprite.addImage("background", bg)
  bgSprite.scale = 0.7

  bgSprite.velocityX = -4
  

  // creating background

  boySprite = createSprite(80,windowHeight-150)
  boySprite.addAnimation("running", boy)
  boySprite.scale = 0.7
  // boy sprite

}

function draw() {
  background(255,255,255);  

  if(bgSprite.x<0){
    bgSprite.x = bgSprite.width/2-580
  }

  drawSprites();
}