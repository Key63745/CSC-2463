
function setup() {
  var cnv = createCanvas(600, 600);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) /2;
  cnv.position(x,y);

  
  
}

function draw() {
  let green = color("green");
  let red = [255, 0, 0];
  background(20, 75, 200);
 
  
fill(green);
strokeWeight(5);
stroke(255);
circle(300,300, 300);

fill(red)
beginShape();
vertex(450, 250)
vertex(350, 248)
vertex(300, 150)
vertex(250, 248)
vertex(150, 250)
vertex(225, 330)
vertex(185, 430)
vertex(300, 370)
vertex(410, 430)
vertex(375, 330)
vertex(450,250)


endShape();



}
