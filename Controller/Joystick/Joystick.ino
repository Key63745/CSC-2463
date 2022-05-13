#include "PDMSerial.h"

PDMSerial pdm;

const int SW_pin = 2;
const int X_pin = A0;
const int Y_pin = A1;
const int outPin = 4;
int joyXdata;
int joyYdata;
int joyBdata;

void setup(){
  pinMode(SW_pin, INPUT);
  pinMode(X_pin, INPUT);
  pinMode(Y_pin, INPUT);
  pinMode(outPin, OUTPUT);
  digitalWrite(outPin, LOW);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
joyXdata = analogRead(X_pin);
joyYdata = analogRead(Y_pin);
joyBdata = digitalRead(SW_pin);
pdm.transmitSensor("end");


pdm.transmitSensor("joyX", joyXdata);
pdm.transmitSensor("joyY", joyYdata);
pdm.transmitSensor("joyButton", joyBdata);
pdm.transmitSensor("end");

 boolean newData = pdm.checkSerial();
  if(newData) {
    if(pdm.getName().equals(String("led"))) {
      digitalWrite(outPin, HIGH);
      delay(100);
      digitalWrite(outPin, LOW);
      delay(100);
      digitalWrite(outPin, HIGH);
      delay(100);
      digitalWrite(outPin, LOW);
      delay(100);
    }
  }
}
