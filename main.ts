let Velocidad = 40
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
        }
        if (input.lightLevel() < 28) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            for (let index = 0; index < 1; index++) {
                music.playMelody("D E D E F F G A ", 120)
            }
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
