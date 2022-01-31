//Global variables
let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;



//Function theat creates the canvas
function setup() 
{
  createCanvas(800, 500);
  background(255);
  currentColor = 0;
  red = new colorBox(0, "red");
  orange = new colorBox(50, "orange");
  yellow = new colorBox(100, "yellow");
  green = new colorBox(150, "green");
  cyan = new colorBox(200, "cyan");
  blue = new colorBox(250, "blue");
  magenta = new colorBox(300, "magenta");
  brown = new colorBox(350, "brown");
  white = new colorBox(400, "white");
  black = new colorBox(450, "black"); 
  


 
}



//Function that determines if a line isbeing drawn according to mouse input.
function draw() 
{
  if(mouseIsPressed)
  {
    if(mouseX > 51)
    {
      drawLine();
    }
  }

  red.appear();
  orange.appear();
  yellow.appear();
  green.appear();
  cyan.appear();
  blue.appear();
  magenta.appear();
  brown.appear();
  white.appear();
  black.appear(); 
  black.onMousePressed();
  
}



class colorBox
{



constructor(y, color)
{
this.x = 0;
this.y = y;
this.w = 50;
this.h = 50
this.color = color;

}



appear()
{
  push();
fill(this.color);
rect(this.x, this.y, this.w, this.h);
  pop();
}





}



//Function that draws the line. Includes: Line thickness, and color
function drawLine()
{
  push();
  stroke(currentColor);
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();

}
