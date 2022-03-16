radio.setGroup(250)
RunComp.SetLightLevel()
let cas = 0
let zacatek = 0
let konec = 0
RunComp.OnLightDrop(function on_light_drop() {
    
    let finish = control.millis()
    cas = zacatek - konec
    music.playTone(Note.A, 1000)
})
console.log(cas)
radio.onReceivedNumber(function on_received_number(number: number) {
    let start = control.millis()
})
