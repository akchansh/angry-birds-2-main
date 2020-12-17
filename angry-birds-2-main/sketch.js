const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0
var birdarr = []
var gameState = "onSling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    setBackground()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(250,130);
    bird2 = new Bird(150,170)
    bird3 = new Bird(100,170)
    bird4 = new Bird(50,170)
    birdarr = [bird4,bird3,bird2,bird]
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:250, y:120});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig1.score()
    bird2.display()
    bird3.display()
    bird4.display()
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    pig3.score()
    box5.display();
    log4.display();
    log5.display();
    slingshot.display();    
    platform.display();
    push()
    text(mouseX +"," + mouseY,mouseX,mouseY)
    text("Score : " + score,900,35)
    pop()
}

function mouseDragged(){
    if(gameState !== "over"){
    if (gameState === "onSling"){
    Matter.Body.setPosition(birdarr[birdarr.length-1].body, {x: mouseX , y: mouseY});
    }}
}


function mouseReleased(){
    if (gameState !== "over"){
    slingshot.fly();
    gameState = "launch"
    //if (birdarr.length > 1){
    setTimeout(()=>{birdarr.pop()},1000)
    if (birdarr.length === 0){
        gameState = "over"
    }
    }
}

function keyPressed(){
    if(gameState !== "over"){
    if (keyCode === 32){
    slingshot.attach(birdarr[birdarr.length-1].body)
    gameState = "onSling"
    }
    }
}

async function setBackground(){
    var response = await(fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"))
    var responsejson = await response.json()
    var datetime = responsejson.datetime
    var hour = datetime.slice(11,13)
    if (hour >= 6 && hour <= 18){
        backgroundImg = loadImage("sprites/bg.png")
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg")
    }
    console.log(hour)
}