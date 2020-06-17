radio.onReceivedNumber(function (receivedNumber) {
    let 相手の手２ = 0
    let 相手の手１ = 0
    if (相手の手１ && 相手の手２) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(2)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(8)
})
