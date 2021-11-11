var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");//Aqui le faltaba el .png a tu imagen por eso no se visualizaba
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//fairyVoice = loadSound("sound/joyMusic.mp3");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);
	
	//escribe el código para reproducir el sonido fairyVoice
	//fairy.Playsound();

	//crea el sprite del hada, y agrega la animación para el hada

    fairy = createSprite(200,390,200,20);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic: true});//Aqui le agregue el isStatic:true para que la 
	World.add(world, starBody);                                                //estrella este quieta y solo caiga cuando oprimes le tecla de hacia abajo
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
 Engine.update(engine);
  star.x = starBody.position.x 
  star.y = starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470&&fairy.x>510&&fairy.x<560){//lo que le agregue de fairy.x es para que la estrella se quede quieta
	  Matter.Body.setStatic(starBody,true);                               //cuando el hada esta en esas posiciones pero hace falta perfeccionarlo
  }

  drawSprites();
  keyPressed();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x+5;
	}
	
	if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x-5;
	}
}
