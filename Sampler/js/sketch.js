let multiplayer, playFire, playWater, playEarth, playAir, reverb, slider;

function preload()
{
  reverb = new Tone.Freeverb();

  multiplayer = new Tone.Players({
  fire: 'media/gab3-x-hypertrap-type-lead-melody-pop-star_148bpm.wav',
  water: 'media/620551__onlineforever__smart-guitar-melody-135-bpm-c-min.wav',
  air: 'media/620574__jixolros__sneaky-poot-03.wav',
  earth: 'media/620472__jd-brick-productions__soldier-shouts-germans-high.wav'
  

  }).chain(reverb, Tone.Destination);
}

function setup() {
  createCanvas(400, 400);
  playFire = createButton("Fire");
  playFire.position(100, 100);
  playFire.mousePressed(firePlayback);

  playWater = createButton("water");
  playWater.position(200, 100);
  playWater.mousePressed(waterPlayback);

  playEarth = createButton("Earth");
  playEarth.position(100, 200);
  playEarth.mousePressed(earthPlayback);

  playAir = createButton("Air");
  playAir.position(200, 200);
  playAir.mousePressed(airPlayback);

  slider = createSlider(0.1, 0.9, 0.4, 0.05);
  slider.position(100, 300);
  slider.style('width', '150px');
  
  
}

function draw() {
  background(220);
  text('Reverb', 155, 290);
  reverb.roomSize.value = slider.value();
}


function firePlayback()
{
  multiplayer.player('fire').start();
  
}

function waterPlayback()
{
  multiplayer.player('water').start();
}

function earthPlayback()
{
  multiplayer.player('earth').start();
}

function airPlayback()
{
  multiplayer.player('air').start();
}