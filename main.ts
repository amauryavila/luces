let Aleatorio = 0
input.onButtonPressed(Button.A, function () {
    Aleatorio = randint(0, 3)
    music.playMelody("C - C - C C5 - - ", 237)
    basic.pause(500)
    if (Aleatorio == 1) {
        // Piedra
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (Aleatorio == 2) {
        // Papel
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (Aleatorio == 3) {
        // tijera
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    music.playMelody("- - - - - - E C ", 244)
})
