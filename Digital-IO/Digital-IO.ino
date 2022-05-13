int ledPin1 = 5;
int ledPin2 = 4;
int buttonOnPin = 9;
int buttonOffPin = 8;


void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(buttonOnPin, INPUT_PULLUP);
  pinMode(buttonOffPin, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(digitalRead(buttonOnPin) == LOW)
  {
    digitalWrite(ledPin1, HIGH);
    digitalWrite(ledPin2, LOW);
    delay(10000);
    digitalWrite(ledPin1, LOW);
    digitalWrite(ledPin2, HIGH);
    delay(5000);
    digitalWrite(ledPin1, HIGH);
    digitalWrite(ledPin2, LOW);
    delay(1000);
    digitalWrite(ledPin1, LOW);
    digitalWrite(ledPin2, HIGH);
    
  }
  if(digitalRead(buttonOffPin) == LOW)
  {
    digitalWrite(ledPin1, LOW);
    digitalWrite(ledPin2, HIGH);
    delay(10000);
    digitalWrite(ledPin1, HIGH);
    digitalWrite(ledPin2, LOW);
    delay(5000);
     digitalWrite(ledPin1, LOW);
    digitalWrite(ledPin2, HIGH);
    delay(1000);
     digitalWrite(ledPin1, HIGH);
    digitalWrite(ledPin2, LOW);
  }
}
