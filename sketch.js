
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15,mango16,mango17;
var world,boy;
var launchingForce=100;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,25);
	mango2=new mango(1200,200,25)
	mango3=new mango(1106,180,25);
	mango4=new mango(1000,150,25);
	mango5=new mango(1015,95,25);
	mango6=new mango(1015,220,25);
	mango7=new mango(1025,75,25);
	mango8=new mango(1075,170,25);
	mango9=new mango(1065,50,25);
	mango10=new mango(1055,120,25);
	mango11=new mango(1110,55,25);
	mango12=new mango(1206,127,25);
	mango13=new mango(940,190,25);
	mango14=new mango(970,259,25);
	mango15=new mango(1100,228,25);
	mango16=new mango(1160,180,25);
	mango17=new mango(1180,110,25);
	
	

	stoneObj=new stone(235,420,30); 
	
	
	treeObj=new tree(1050,580);
	
	groundObject=new ground(width/2,600,width,20);
	
	//launcherObject=new launcher(stoneObj.body,{x:235,y:420})
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
		width: 1300,
		height: 600,
		wireframes: false
	  }
	});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

	treeObj.display();
	stoneObj.display()
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()
	mango11.display()
	mango12.display()
	mango13.display()
    mango14.display()
	mango15.display()
	mango16.display()
	mango17.display()
 	groundObject.display();

	 
}
