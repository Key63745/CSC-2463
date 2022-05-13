// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to
const int ledPin = 9;      // Pin that our LED is connected to. It has to be a PWM Pin

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)
int ledBright = 0;         // value for the PWM duty cycle %

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out for the monitor and LED:
  outputValue = map(sensorValue, 0, 300, 0, 255);
  ledBright = map(sensorValue, 0, 1023, 0, 100);
  // change the analog out value:
  analogWrite(analogOutPin, outputValue);

  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t Brightness % = ");
  Serial.print(ledBright);
  Serial.print("\t output = ");
  Serial.println(outputValue);

 // Delay the signal by 2 ms to allow the digitlal-to-analog converter time to re-sync
  delay(2);
  
  //Write the duty cycle % to the LED
  analogWrite(ledPin, ledBright);
}
