let Contra = 0
let numero = 0
let letra = 0
let simbol = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        Contra = randint(1, 3)
        if (Contra == 1) {
            numero = randint(0, 9)
            basic.showString("" + (numero))
        } else if (Contra == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.showString("A")
            } else if (letra == 2) {
                basic.showString("B")
            } else if (letra == 3) {
                basic.showString("C")
            } else if (letra == 4) {
                basic.showString("D")
            }
        } else if (Contra == 3) {
            simbol = randint(1, 10)
            if (simbol == 1) {
                basic.showString("*")
            } else if (simbol == 2) {
                basic.showString(".")
            } else if (simbol == 3) {
                basic.showString("?")
            } else if (simbol == 4) {
                basic.showString("! ")
            }
        }
        basic.pause(2000)
    }
})
basic.forever(function () {
	
})
