function setup() {
  var cnv = createCanvas(800, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) /2;
  cnv.position(x,y);
}

function draw() {
  background(255);
let red = [255, 1, 1, 100]; 
let green =[1, 255, 1, 100];
let blue = [1, 1, 255, 100];


noStroke();
fill(red);
  circle(400, 290, 300)
  
fill(green);
  circle(510, 450, 300);
  
  fill(blue);
  circle(280, 450, 300);
  
  
  

}
