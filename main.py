def on_forever():
     while input.button_is_pressed(Button.A):
        basic.show_string("A")
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
