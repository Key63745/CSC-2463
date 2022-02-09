let character;

function preload()
{
  spriteSheet = loadImage("SpelunkyGuy.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  character = new Character(spriteSheet, 0, 300);
}



function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
  {
    character.go(1);
   
  }
  else(keyCode == LEFT_ARROW)
  {
    character.go(-1);
    
  }
}



function keyReleased()
{
 character.stop();
}



function draw() {
  background(255, 255, 255);
  character.draw();
}


class Character
{
  constructor(spriteSheet, x, y)
  {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw()
  {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    if(move == 0)
    {
      image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 80, 80);
    }
    else
    {
      image(this.spriteSheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80);
    }
  
    if(frameCount % 5 == 0)
    {
      this.sx = (this.sx + 1) % 8;
    }
    this.x += 2 * this.move;
    pop();
  }


  go(direction)
  {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop()
  {
    this.move = 0;
  }
  
}
