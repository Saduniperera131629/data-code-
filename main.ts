serial.writeNumbers([0, 1, 0])
led.plotBarGraph(
input.lightLevel(),
100
)
radio.setGroup(1)
control.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
serial.redirect(
SerialPin.USB_TX,
SerialPin.P16,
BaudRate.BaudRate115200
)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
let list = [0, 1]
basic.forever(function () {
	
})
