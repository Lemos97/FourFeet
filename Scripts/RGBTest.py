import time
import pigpio
from subprocess import call


def loop():
    pi = pigpio.pi()

    RedPinO = 17
    GreenPinO = 22
    BluePinO = 24

    print ("Testing red")

    pi.set_PWM_dutycycle(RedPinO, 255)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(RedPinO, 70)

    pi.set_PWM_dutycycle(RedPinO, 0)

    print ("testing green")
    pi.set_PWM_dutycycle(GreenPinO, 255)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(GreenPinO, 70)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(GreenPinO, 0)

    print("testing blue")

    pi.set_PWM_dutycycle(BluePinO, 255)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(BluePinO, 70)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(BluePinO, 0)

    print("Test ended")
    pi.stop()


if __name__ == "__main__":

    try:
        while True:
            loop()
    except KeyboardInterrupt:
        pi = pigpio.pi()

        RedPinO = 17
        GreenPinO = 22
        BluePinO = 24

        pi.set_PWM_dutycycle(RedPinO, 0)

        pi.set_PWM_dutycycle(GreenPinO, 0)

        pi.set_PWM_dutycycle(BluePinO, 0)
        pi.stop()
