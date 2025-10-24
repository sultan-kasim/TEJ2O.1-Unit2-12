/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program turns on red if to close and green not too close.
*/


// Variables
let distanceToObject = 0
let strip: neopixel.Strip = null

// Setup Neopixel on pin P16 with 4 LEDs
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// Show happy face when powered on
basic.showIcon(IconNames.Happy)

// Find distance from sonar and trigger LED alert
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    // Measure distance using sonar sensor (P1 = Trigger, P2 = Echo)
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // Show distance on the LED screen
    basic.showNumber(distanceToObject)

    // Show Green if distance >= 10 cm, Red if closer than 10 cm
    if (distanceToObject >= 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        strip.clear()
        strip.show()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.clear()
        strip.show()
    }

    // Show happy face again
    basic.showIcon(IconNames.Happy)
})
