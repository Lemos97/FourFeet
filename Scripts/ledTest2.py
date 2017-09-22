import time
import pigpio
from random import *
from subprocess import call

RedPinO = 17
GreenPinO = 22
BluePinO = 24

RedPinT = 13
GreenPinT = 26
BluePinT = 21

RedPinThr = 5
GreenPinThr = 6
BluePinThr = 12

RedPinF = 19
GreenPinF = 16
BluePinF = 20


def random_color():
    colors = []
    for i in range(0,3):
       x = randint(0,255)
       colors.append(x)
    return colors


def random_strip():

    strips = dict({
        'strip1': {
            'R': 17,
            'G': 22,
            'B': 24
        },
        'strip2': {
            'R': 13,
            'G': 26,
            'B': 21
        },
        'strip3': {
            'R': 5,
            'G': 6,
            'B': 12
        },
        'strip4': {
            'R': 19,
            'G': 16,
            'B': 20
        }
    })

    rand = random.choice(list(strips))
    strip = dict(strip=strips[str(rand)])
    return strips


def random_color_random_strip():
    c = random_color()
    s = random_strip()

    pi.set_PWM_dutycycle(int(s.get('R')), c[0])
    pi.set_PWM_dutycycle(int(s.get('G')), c[1])
    pi.set_PWM_dutycycle(int(s.get('B')), c[2])


def loop():

    pi = pigpio.pi()

    RedPinO = 17
    GreenPinO = 22
    BluePinO = 24

    RedPinT = 13
    GreenPinT = 26
    BluePinT = 21

    RedPinThr = 5
    GreenPinThr = 6
    BluePinThr = 12

    RedPinF = 19
    GreenPinF = 16
    BluePinF = 20

    print("Testing red")

#    pi.set_PWM_dutycycle(RedPinO, 255)
#    pi.set_PWM_dutycycle(RedPinT, 255)
#    pi.set_PWM_dutycycle(RedPinThr, 255)
#    pi.set_PWM_dutycycle(RedPinF, 255)
#    time.sleep(0.5)

    pi.set_PWM_dutycycle(RedPinO, 70)
    pi.set_PWM_dutycycle(RedPinT, 70)
    pi.set_PWM_dutycycle(RedPinThr, 70)
    pi.set_PWM_dutycycle(RedPinF, 70)
    time.sleep(0.5)

#    pi.set_PWM_dutycycle(RedPinO, 0)
#    pi.set_PWM_dutycycle(RedPinT, 0)
#    pi.set_PWM_dutycycle(RedPinThr, 0)
#    pi.set_PWM_dutycycle(RedPinF, 0)

    print ("testing green")
#    pi.set_PWM_dutycycle(GreenPinO, 255)
#    pi.set_PWM_dutycycle(GreenPinT, 255)
#    pi.set_PWM_dutycycle(GreenPinThr, 255)
#    pi.set_PWM_dutycycle(GreenPinF, 255)
#    time.sleep(0.5)

    pi.set_PWM_dutycycle(GreenPinO, 70)
    pi.set_PWM_dutycycle(GreenPinT, 70)
    pi.set_PWM_dutycycle(GreenPinThr, 70)
    pi.set_PWM_dutycycle(GreenPinF, 70)
    time.sleep(0.5)

#    pi.set_PWM_dutycycle(GreenPinO, 0)
#    pi.set_PWM_dutycycle(GreenPinT, 0)
#    pi.set_PWM_dutycycle(GreenPinThr, 0)
#    pi.set_PWM_dutycycle(GreenPinF, 0)

    print("testing blue")


    pi.set_PWM_dutycycle(BluePinO, 70)
    pi.set_PWM_dutycycle(BluePinT, 70)
    pi.set_PWM_dutycycle(BluePinThr, 70)
    pi.set_PWM_dutycycle(BluePinF, 70)
    time.sleep(0.5)


    print("Test ended")
    pi.stop()


if __name__ == "__main__":
    pi = pigpio.pi()

    try:
        while True:
            random_color_random_strip()
            # loop()

    except KeyboardInterrupt:

        pi.set_PWM_dutycycle(RedPinO, 0)
        pi.set_PWM_dutycycle(RedPinT, 0)
        pi.set_PWM_dutycycle(RedPinThr, 0)
        pi.set_PWM_dutycycle(RedPinF, 0)

        pi.set_PWM_dutycycle(GreenPinO, 0)
        pi.set_PWM_dutycycle(GreenPinT, 0)
        pi.set_PWM_dutycycle(GreenPinThr, 0)
        pi.set_PWM_dutycycle(GreenPinF, 0)

        pi.set_PWM_dutycycle(BluePinO, 0)
        pi.set_PWM_dutycycle(BluePinT, 0)
        pi.set_PWM_dutycycle(BluePinThr, 0)
        pi.set_PWM_dutycycle(BluePinF, 0)
        pi.stop()
