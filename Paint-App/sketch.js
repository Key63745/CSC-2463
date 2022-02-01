//Global variables
let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;



//Function theat creates the canvas
function setup() 
{
  
  createCanvas(800, 500);
  background(255);
  resetSketch();
  var button = createButton("Clear")
  button.size(50,50);
  button.mousePressed(resetSketch);
  
}





//Function that determines if a line is being drawn according to mouse input.
function draw() 
{
  if(mouseIsPressed)
  {
    if(mouseX > 51)
    {
      drawing();
    }
  }

  red.appear(); 
red.onMousePressed();
  orange.appear();
  yellow.appear();
  green.appear();
  cyan.appear();
  blue.appear();
  magenta.appear();
  brown.appear();
  white.appear();
  black.appear();
  
  
}



function resetSketch()
{
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



//Class that sets the dimensions of the color boxes, and changes the paint colors
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

if (this.color != "white")
{
  noStroke();
}

fill(this.color);
rect(this.x, this.y, this.w, this.h);
  pop();
}

onMousePressed(){
  if(mouseIsPressed){
    if(mouseX < 50){
if(mouseY > 0 && mouseY < 50){
  currentColor = "red";
} else if(mouseY > 50 && mouseY < 100){
  currentColor = "orange";
}else if(mouseY > 100 && mouseY < 150){
  currentColor = "yellow";
}else if( mouseY > 150 && mouseY < 200){
  currentColor = "green";
}else if( mouseY > 200 && mouseY < 250){
  currentColor = "cyan";
}else if (mouseY > 250 && mouseY < 300){
  currentColor = "blue";
}else if( mouseY > 300 && mouseY < 350){
  currentColor = "magenta";
}else if(mouseY > 350 && mouseY < 400){
  currentColor = "brown";
}else if(mouseY > 400 && mouseY < 450){
  currentColor = "white";
}else if(mouseY > 450 && mouseY < 500){
  currentColor = "black";
}

}
}
}

}



//Function that draws the line. Includes: Line thickness, and color
function drawing()
{
  push();
  stroke(currentColor);
  strokeWeight(4);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();

}
