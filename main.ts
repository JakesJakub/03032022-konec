radio.setGroup(250)
radio.setGroup(111)
RunComp.SetLightLevel()
let cas = 0
let cas1 = 0
let cas2 = 0
RunComp.OnLightDrop(function on_light_drop() {
    let cas2 = control.millis()
    music.playTone(Note.A, 1000)
    console.log(cas)
})
radio.onReceivedNumber(function on_received_number(number: number) {
    
    cas1 = control.millis()
})
