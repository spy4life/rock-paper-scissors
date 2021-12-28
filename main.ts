input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    basic.pause(1000)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . # # . .
            # # # # .
            # # # # #
            # # # # .
            . # # . .
            `)
    } else {
        basic.showLeds(`
            . # . . .
            # # # # #
            . # . . .
            . # . . .
            . # . . .
            `)
    }
})
let hand = 0
basic.showString("RPS ")
