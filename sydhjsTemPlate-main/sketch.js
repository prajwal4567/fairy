var starImg,bgImg;
var star, starBody;
var fairy,fairys,fairyw;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairys=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairys.loop();

	fairyw=createSprite(200,500);
    fairyw.addAnimation("fairy",fairy);
	fairyw.scale=0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
 if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
 }

  //if(star.y>=800){
    //star.y=30
   // Matter.Body.setStatic(starBody,false); 
  //}

  drawSprites();

  keyPressed()

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyDown("right")){
		fairyw.x+=2
	}
	
	if(keyDown("left")){
		fairyw.x+=-2
	}
}