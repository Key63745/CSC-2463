let pitch = 800;
let ufoImage;
let backGround = 220;
let osc = new Tone.AMOscillator(pitch, 'sine', 'sine').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(ampEnv);

let freqLFO = new Tone.LFO(4, 300, 1000).start();
freqLFO.connect(osc.frequency);


let noise = new Tone.Noise('pink').start();
let noiseEnv = new Tone.AmplitudeEnvelope({
  attack: 0.1,
  decay: 0.2,
  sustain: 1.0,
  release: 0.8
}).connect(gain);
let noiseFilter = new Tone.Filter(800, 'lowpass').connect(noiseEnv);
noise.connect(noiseFilter);

function preload()
{
  ufoImage = loadImage("UFO.gif");
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(backGround);

  if((frameCount % 60) === 0)
  {
    pitch = random(300, 1000);
  }
}

function mousePressed(){
  console.log('pressed');
  ampEnv.triggerAttackRelease('4n');
  osc.frequency.linearRampToValueAtTime(pitch - 200, '+1');
  ampEnv.triggerAttackRelease('4n', '+1');
  backGround = ufoImage;



  if(mouseY > 400)
  {
    noiseFilter.frequency.value = mouseX + 100
    noiseEnv.triggerAttackRelease(0.5);
  }

}

function mouseReleased()
{
  backGround = 220;
}