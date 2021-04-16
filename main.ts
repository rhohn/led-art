function moveForward () {
    turtle.pen(TurtlePenMode.Down)
    turtle.forward(1)
}
function turnLeft () {
    turtle.turnLeft()
}
function back () {
    turtle.back(1)
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    back()
})
input.onButtonPressed(Button.A, function () {
    turnLeft()
})
function hide () {
    isOn = !(isOn)
    led.enable(isOn)
}
function turnRight () {
    turtle.turnRight()
}
input.onButtonPressed(Button.AB, function () {
    moveForward()
})
input.onButtonPressed(Button.B, function () {
    turnRight()
})
function jump () {
    turtle.pen(TurtlePenMode.Up)
    turtle.forward(1)
}
input.onGesture(Gesture.Shake, function () {
    hide()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    jump()
})
let isOn = false
isOn = true
