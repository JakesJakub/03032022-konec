radio.set_group(250)
RunComp.set_light_level()

cas = 0
zacatek = 0
konec = 0

def on_light_drop():
    global cas
    finish = control.millis()
    cas = zacatek - konec
    music.play_tone(Note.A, 1000)
RunComp.on_light_drop(on_light_drop)
print(cas)

def on_received_number(number):
    start = control.millis()
radio.on_received_number(on_received_number)