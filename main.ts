radio.setTransmitPower(3)
radio.setGroup(111)
RunComp.SetLightLevel()
let reset = 0
let zacatek = 1
let stop = 2
let start = 0
radio.onReceivedNumber(function on_received_number(zacatek: number) {
    
    start = control.millis()
})
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(stop)
    pause(start)
    music.playTone(Note.A, 1000)
})
radio.onReceivedNumber(function on_received_number2(reset: number) {
    control.reset()
})
basic.showNumber(start)
