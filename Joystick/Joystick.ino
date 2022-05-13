#include "PDMSerial.h"

const int SW_pin = 2;
const int X_pin = A0;
const int Y_pin = A1;


void setup(){
  pinMode(SW_pin, INPUT);
  pinMode(X_pin, INPUT);
  pinMode(Y_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
int joyXdata = analogRead(X_pin);
int joyYdata = analogRead(Y_pin);
int joyBdata = analogRead(SW_pin);

pdm.transmitSensor("joyX", joyXdata);
pdm.transmitSensor("joyY", joyYdata);
pdm.transmitSensor("joyButton", joyBdata);
pdm.transmitSensor("end");

}
