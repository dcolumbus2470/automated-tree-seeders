input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(2000)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.middleServo.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
fwdMotors.middleServo.fwdSetAngle(0)
