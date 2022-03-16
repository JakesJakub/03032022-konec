radio.set_group(250)
radio.set_group(111)
RunComp.set_light_level()

cas = 0
cas1 = 0
cas2 = 0

def on_light_drop():
    cas2 = control.millis()
    music.play_tone(Note.A, 1000)
    print(cas)
RunComp.on_light_drop(on_light_drop)


def on_received_number(number):
    global cas1
    cas1 = control.millis()
radio.on_received_number(on_received_number)