

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 255, 0);
  // change the analog out value:
  analogWrite(analogOutPin, outputValue);


  

 if(sensorValue > 800 && sensorValue < 810)
 {
  analogWrite(analogOutPin2, 0);
 }
 else
 {
  analogWrite(analogOutPin2, outputValue);

 }
 
  

  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
