#ifndef PDMSerial_h
#define PDMSerial_h

#include "Arduino.h"

class PDMSerial
{
  public:
    PDMSerial();
    boolean checkSerial();
    void transmitSensor(String name, int value);
    void transmitSensor(String name, float value);
    void transmitSensor(String name);
    String getName();
    int getValue();
  
  private:
    boolean _startingTransmit;
    String _name;
    int _value;
};

#endif
