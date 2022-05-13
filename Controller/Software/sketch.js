let bgImage, score, walking, squished, 
time, gameState, startTime, timerIsDone, bugGroup, wall,speed;
let bugs = [];
let walls = [];
let imageURL = "https://mbardin.github.io/PDM-resources/media/sprite_images/bug_squish/";
let dir = [0, 90, 180, 270];
let  synth, seq, squishSound, endGame;
let melody = 
[["B3","E4"],null, null,null,["F#4", "G4"], null, null, null, 
["E4", "D4"], null, null, null, ["B3", "D4"], null, null, null,
["B3","E4"],null, null,null,["F#4", "G4"], null, null, null,
["A4", "B4"], null, null, null, ["G4", "B4"], null, null, null,
["G4", "B4"], null ,null, null, ["G4", "A4"], null, null, null,
["F#4", "G4"], null, null, null, ["E4","F#4"], null, null, null]; //notes to be played in order
let soundURL = 'Music/SquishSound.wav';
let soundURL1 = 'Music/endGame.wav';
let serialPDM;
let portName = 'COM5';
let bugSpray;
let sensors;







function preload(){
  squishSound = new Tone.Player(soundURL).toDestination();
  endGame = new Tone.Player(soundURL1).toDestination();
  bgImage = loadImage(imageURL + "background.jpg");

  for(let i = 0; i < 4; i++)
  {
    bugs[i] = loadImage("spider_" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  bugSpray;
  serialPDM = new PDMSerial(portName);
  console.log(serialPDM.inData);
  sensors =serialPDM.sensorData;
  score = 0;
  startTime = 30;
 
  timerIsDone = false;
  gameState = "start";
  bugGroup = new Group();
  walls = new Group();
  speed = 2;
  rectMode(CENTER);
  textAlign(CENTER);
  borders();

  Tone.Transport.bpm = 60; //the tempo of our clock
  Tone.Transport.start(); //start the clock. MUST HAPPEN TO PLAY A MELODY!!
  
synth = new Tone.Synth({
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 1.0,
    release: 0.8
  }
}).toDestination();
  
seq = new Tone.Sequence(function(time, note){
  if(note != null){
  synth.triggerAttackRelease(note, 0.5);
  }
}, melody, `8n`);
 

}

function draw() {
  background(bgImage);
  bugSpray = circle(sensors.joyX, sensors.joyY, 50);
  
if(gameState == "start"){
push();
fill("grey")
rect(width/2, height/2, 200, 200);
fill(0);
text("SQUISH ALL THE BUGS \n CLICK THE JOYSTICK TO BEGIN ", width /2, height/2);
pop();

if(sensors.joyButton === 0){
  makeBugs(20);
  gameState = "play"
  seq.start();
}

} else if (gameState == "play"){

push();
fill(0);
text("TIME LEFT: " + (startTime - timer() % startTime) + "\nSCORE: " + score, 50, 20);
pop();

if(bugGroup.length < 1){
  makeBugs(20);
}




timer();
bugGroup.collide(walls, teleport);
bugGroup.displace(bugGroup);
drawSprites();
  


if(timerIsDone === true){
  gameState = "end";
  seq.stop();
  endGame.start();
}

} else if (gameState === "end"){
  push();
  fill("grey")
  rect(width/2, height/2, 250, 250);
  fill(0);
  text("GAME OVER\nYOU SQUISHED\n" +score+ "\n BUGS!\nPRESS THE JOYSTICK TO PLAY AGAIN. ", width /2, height/2);
  pop();

 
    if(sensors.joyButton === 0){
      setup();
    }
  
}

  
}





function timer() {
  time = int((millis() - startTime) / 1000);
  if (time % startTime === 0) {
    timerIsDone = true;
  }
  return time;
}

function makeBugs(num){

  for(let i = 0; i < num; i++){
  let spriteSheet = createSprite(random(100, width, -100), random(100, height -100), 50, 50);
 spriteSheet.scale = 0.8;
 spriteSheet.isDead = false;
spriteSheet.rotation = random(dir);

if(spriteSheet.rotation == 0 ){
  spriteSheet.setSpeed(speed, 270);
} else if(spriteSheet.rotation == 90){
  spriteSheet.setSpeed(speed, 0);
}else if(spriteSheet.rotation == 180){
  spriteSheet.setSpeed(speed, 90);
}else if(spriteSheet.rotation == 270){
  spriteSheet.setSpeed(speed, 180);
}


  walking = spriteSheet.addAnimation("walk", bugs[0], bugs[1], bugs[0], bugs[2])
  walking.frameDelay = 8;
  squished = spriteSheet.addAnimation("squish", bugs[3])

  spriteSheet.onMousePressed = function(){
    if(this.isDead === false){
    this.changeAnimation("squish");
    squishSound.start();
    this.setSpeed(0,0);
    this.life = 100;
    score ++;
    serialPDM.transmit('led', 0);
    bugGroup.remove(this);
    this.isDead = true;
    }
  }
  

  bugGroup.add(spriteSheet);
}
}

function borders(){
for( let i = 0; i < 4; i++){
  let wall;
  if(i === 0){
    wall = createSprite(width /2, -100, 2000, 10);
  }else if(i === 1){
    wall = createSprite(width /2, height + 100, 2000, 10);
  }else if (i === 2){
    wall = createSprite(-100, height /2, 10, 2000);
  }else if( i === 3){
    wall = createSprite(height + 100, height /2, 10, 2000);
  }
  wall.imovable = true;
  walls.add(wall);

}

}

function teleport(){
  if(this.rotation === 90){
    this.position.x = -50;
    this.position.y = random(20, height - 20);
    }else if (this.rotation === 270 ){
      this.position.x = width + 50;
      this.position.y = random(20, height - 20);
    }else if (this.rotation === 180){
      this.position.y  = -50;
      this.position.x = random(20, width - 20);
    }else if (this.rotation === 0){
      this.position.y = height + 50;
      this.position.x = random(20, width - 20);
    }
}