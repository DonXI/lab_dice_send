radio.setGroup(3)
radio.setTransmitPower(7)
let rand_num = 0
basic.forever(function () {
    basic.showIcon(IconNames.No)
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        if (input.isGesture(Gesture.Shake)) {
            rand_num = randint(1, 6)
            radio.sendNumber(rand_num)
            basic.showNumber(rand_num)
        }
    }
})
