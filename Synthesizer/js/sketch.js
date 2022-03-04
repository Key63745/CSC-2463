let simpSynth, reverb, roomSlider;

reverb = new Tone.JCReverb({
  roomSize: 0.0,
  wet: 0.5
}).toDestination();

function setup() {
  createCanvas(windowWidth, windowHeight);

  simpSynth = new Tone.Synth({ 
    Oscillator: {
      type: "brown"
    }, 
    resonance: "0.9",
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.2,
      release: 1
    }
  }).toDestination().connect(reverb);

 roomSlider = createSlider(0, 1, 0.5, 0)
 roomSlider.style("width", "200px");
 roomSlider.position(width/2 - 100, height / 2 + 170);

}

function draw() {
 
  reverb.roomSize.value = roomSlider.value();
  background(20, 59, 50);
  textFont("Helvetica");
  textSize(17);
  text("Click 1 through 8 to play the scale!", width / 2, height / 2 - 100);
  textSize(10);
  fill("white");
  textAlign(CENTER);
  text(
    "Reverb: " + roomSlider.value().toFixed(2) + "%",
    roomSlider.x + 100,
    roomSlider.y - 20
  );
  
}

function keyPressed()
{
  if (keyCode == 49) {
    simpSynth.triggerAttackRelease("C4", 1);
  } else if (keyCode == 50) {
    simpSynth.triggerAttackRelease("D4", 1);
  } else if (keyCode == 51) {
    simpSynth.triggerAttackRelease("E4", 1);
  } else if (keyCode == 52) {
    simpSynth.triggerAttackRelease("F4", 1);
  } else if (keyCode == 53) {
    simpSynth.triggerAttackRelease("G4", 1);
  } else if (keyCode == 54) {
    simpSynth.triggerAttackRelease("A4", 1);
  } else if (keyCode == 55) {
    simpSynth.triggerAttackRelease("B4", 1);
  } else if (keyCode == 56) {
    simpSynth.triggerAttackRelease("C5", 1);
  }
}