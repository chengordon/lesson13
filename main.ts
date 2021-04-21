let range: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1023
    )
    range = strip.range(0, pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1000,
    0,
    30
    ))
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
