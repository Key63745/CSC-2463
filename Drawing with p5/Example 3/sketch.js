function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 300);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) /2;
  cnv.position(x,y);
  
}

function draw() {
let  yellow = [255, 255, 0];
let red = [255, 0, 0];
let white = [255];
let blue = [0, 0, 255];
  background(1);

  //Creates Pacman immage
  fill(yellow);
  arc(150, 140, 200, 200, 225, 500);

  //Creates ghost image
  fill(red);
  rect(340, 85, 190, 160);
  noStroke();
  ellipse(435, 85, 190, 95);

  //creates eyes for ghost image
  fill(white);
circle(380,130, 60);
circle(487, 130, 60);

fill(blue);
circle(380, 130, 40)
circle(487, 130, 40)
  




}
