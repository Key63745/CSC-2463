let serialPDM;
let portName = "COM5"
let sensor;

function setup(){
  serialPDM = new PDMSerial(portName);
   sensor = serialPDM.sensorData;
   createCanvas(600, 400);
}

function draw(){
  background([0, sensor.a0, 0]);

  //console.log(sensor.a0);
}

function mousePressed(){
  serialPDM.transmit('mouse', mouseY);
  console.log(mouseY);
}