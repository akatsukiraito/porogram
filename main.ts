radio.onReceivedNumber(function (receivedNumber) {
    let 相手の手２ = 0
    if (相手の手１ == 2 && 相手の手２ == 2) {
        自分の手 = 1
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
        if (相手の手１ == 1 && 相手の手２ == 1) {
            自分の手 = 3
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        if (相手の手１ == 3 && 相手の手２ == 3) {
            自分の手 = 2
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.No)
        }
        if (相手の手１ == 相手の手２ && 相手の手２ == 自分の手) {
            basic.showIcon(IconNames.Triangle)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(2)
    自分の手 = 2
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(3)
    相手の手１ = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(1)
    自分の手 = 1
})
let 自分の手 = 0
let 相手の手１ = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(8)
})
