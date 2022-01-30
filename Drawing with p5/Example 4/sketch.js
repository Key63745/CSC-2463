
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
strokeWeight(7);
stroke(255);
circle(300,300, 300);

fill(red)
beginShape();
//1
vertex(450, 250)
//2
vertex(350, 248)
//3
vertex(300, 150)
//4
vertex(250, 248)
//5
vertex(150, 250)
//6
vertex(230, 320)
//7
vertex(185, 430)
//8
vertex(300, 370)
//9
vertex(415, 430)
//10
vertex(370, 320)
//11
vertex(450,250)


endShape();



}
