basic.forever(function on_forever() {
    while (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        basic.showIcon(IconNames.No)
    }
})
