/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program turns on red if to close aand green not too close.
*/


// variables
let distanceToObject: number = 0;

let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB);

// setup
basic.showIcon(IconNames.Happy);

// find distance from sonar and trigger the alert
input.onButtonPressed(Button.A, function () {

    basic.clearScreen();

    // measure distance using the sonar sensor (P1=Trigger, P2=Echo)
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    );

    basic.showNumber(distanceToObject);

    // shows Red if too close and shows Green if it's not (flashes for 1 second)

    if (distanceToObject >= 10) {
    
        strip.showColor(neopixel.colors(NeoPixelColors.Green));
        basic.pause(1000);
        
        strip.showColor(neopixel.colors(NeoPixelColors.Black));
    } else {

        strip.showColor(neopixel.colors(NeoPixelColors.Red));
        basic.pause(1000);
        
        strip.showColor(neopixel.colors(NeoPixelColors.Black));
    }

  
    basic.showIcon(IconNames.Happy);
});