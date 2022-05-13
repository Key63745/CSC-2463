let serialPDM;
let sensors;
let portName = 'COM5';
let bullets = [];
let enemies = [];
let score = 0;
let gameState
let bgImage;
let spaceShip, invader;
let spaceGunsound;
let gameMusic;
let soundURL = "394919__navadaux__laser-gun.wav";
let time, startTime, timerIsDone;
let soundURL1 = 'alexander-nakarada-space-ambience.mp3';

function preload(){
bgImage = loadImage("outerSpace.webp");
font1 = loadFont("Game Of Squids.ttf");
spaceShip = loadImage("spaceship.png");
invader = loadImage("spaceship (1).png");
gameMusic = new Tone.Player(soundURL1).toDestination();
spaceGunsound = new Tone.Player(soundURL).toDestination();



}


function setup() {
  serialPDM = new PDMSerial(portName);
  console.log(serialPDM.inData);
  sensors =serialPDM.sensorData;
  createCanvas(800, 800);
  startTime = 30;
  timerIsDone = false;
  gameState = "start";
  angleMode(DEGREES);


  for(let i = 0; i < 20; i++){
    let enemy = {
      x: random(0, width),
      y: random(-800, 0)
    }
    enemies.push(enemy)
  }

}

function draw() {
  background(bgImage);
  rectMode(CENTER);
  push();
  fill(0, 200, 0);
  image(spaceShip, sensors.joyX, height - 65, 50, 50)
  pop();
 
  if(gameState == "start"){
    push();
    rect(width/2, height/2, 350, 350);
    fill(0);
    textFont(font1);
    textSize(15)
    textAlign(LEFT)
    text("Blast the Invaders! \n CLICK THE JOYSTICK TO BEGIN ", 255, 400);
  
    
    pop();
    
    if(sensors.joyButton === 0){
      
      gameState = "play"
      
      
    }
  }else if(gameState == "play"){
    
    for(let bullet of bullets){
      bullet.y -= 10;
      push();
      fill(255, 0, 0);
      circle(bullet.x, bullet.y, 10);
      pop();
      
    }
   
    for(let enemy of enemies){
      enemy.y += 2;
      push();
      imageMode(CENTER);
      image(invader, enemy.x, enemy.y, 30, 30);
      rotate(270);
      pop();
    }
  
    for(let enemy of enemies){
      for(let bullet of bullets)
      {
        if(dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10)
        {
          enemies.splice(enemies.indexOf(enemy), 1)
          bullets.splice(bullets.indexOf(bullet), 1)
          let newEnemy = {
            x: random(0, width),
            y: random(-800, 0)
          }
          enemies.push(newEnemy);
          score++;
          serialPDM.transmit('led', 0);
        }
      }
    }

push();
  fill(255, 0, 0);
  text("TIME LEFT: " + (startTime - timer() % startTime) + "\nSCORE: " + score, 15, 20);
  pop();
  timer();

  if(timerIsDone === true){
    gameState = "end";
   
  }

  }else if(gameState == "end")
  {
    push();
    rect(width/2, height/2, 350, 350);
    fill(0);
    textFont(font1);
    textSize(15)
    textAlign(LEFT)
    text("You did it! \n CLICK THE 'P' BUTTON TO RESTART ", 255, 400);
    pop();
    
    if((keyIsPressed == true) && (key == 'p'))
    {
      setup();
    }
 
  }
  
  
}

function mousePressed(){

  let bullet = {
    x: sensors.joyX,
    y: height - 50

  }
 
  bullets.push(bullet);
  spaceGunsound.start();
  
}

function timer() {
  time = int((millis() - startTime) / 1000);
  if (time % startTime === 0) {
    timerIsDone = true;
  }
  return time;
}