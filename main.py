radio.set_transmit_power(3)
radio.set_group(111)
RunComp.set_light_level()

reset = 0
zacatek = 1
stop = 2
start = 0

def on_received_number(zacatek):
    global start
    start = control.millis()
radio.on_received_number(on_received_number)

def on_light_drop():
    radio.send_number(stop)
    pause(start)
    music.play_tone(Note.A, 200)
RunComp.on_light_drop(on_light_drop)

def on_received_number2(reset):
    control.reset()
radio.on_received_number(on_received_number2)

basic.show_number(start)