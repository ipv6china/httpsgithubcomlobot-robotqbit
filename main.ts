let a = 0
basic.forever(function () {
    if (a == 5) {
        basic.showString("Hello!")
    } else {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
    }
    a += 1
})
