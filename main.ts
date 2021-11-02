function updateSnake () {
	
}
function DrawSnake () {
    for (let index = 0; index <= Snake.length - 1; index++) {
        x = Snake[index]
        index += 1
        y = Snake[index]
        led.plot(x, y)
    }
}
let x = 0
let y = 0
let Direction2 = ""
let Snake: number[] = []
Snake = [
2,
2,
2,
3
]
if (Direction2 == "up") {
    y = y - 1
}
if (Direction2 == "down") {
    y = y + 1
}
if (Direction2 == "left") {
	
}
basic.forever(function () {
    DrawSnake()
})
