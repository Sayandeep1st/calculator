let No_1 = game.askForNumber("Number 1:?")
let No_2 = game.askForNumber("Number 2:?")
let Operator = game.askForNumber("Operator:? (1=+ 2=- 3=* 4=/)")
if (Operator == 1) {
    game.splash(No_1 + No_2)
} else if (Operator == 2) {
    game.splash(No_1 - No_2)
} else if (Operator == 3) {
    game.splash(No_1 * No_2)
} else if (Operator == 4) {
    game.splash(No_1 / No_2)
} else {
    game.splash("Select From Above Option")
}
