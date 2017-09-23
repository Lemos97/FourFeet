import time
import pigpio
from random import *
from subprocess import call

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


def random_color():
    colors = []
    for i in range(0, 15):
        x = randint(0, 255)
        colors.append(x)
    return colors


def random_strip():

    rand = choice(list(strips))
    strip = dict(strip=strips[str(rand)])
    return strip


def random_color_random_strip(sleep):
    c = random_color()
    s = random_strip()

    pi.set_PWM_dutycycle(int(s['strip'].get('R')), choice(c))
    pi.set_PWM_dutycycle(int(s['strip'].get('G')), choice(c))
    pi.set_PWM_dutycycle(int(s['strip'].get('B')), choice(c))
    time.sleep(sleep)
    pi.set_PWM_dutycycle(int(s['strip'].get('R')), 0)
    pi.set_PWM_dutycycle(int(s['strip'].get('G')), 0)
    pi.set_PWM_dutycycle(int(s['strip'].get('B')), 0)


if __name__ == "__main__":
    pi = pigpio.pi()

    try:
        for i in range(1, 15):
            random_color_random_strip(float(1/2))

    except KeyboardInterrupt:
        pi.set_PWM_dutycycle(int(strips['strip1'].get('R')), 0)
        pi.set_PWM_dutycycle(int(strips['strip2'].get('R')), 0)
        pi.set_PWM_dutycycle(int(strips['strip3'].get('R')), 0)
        pi.set_PWM_dutycycle(int(strips['strip4'].get('R')), 0)

        pi.set_PWM_dutycycle(int(strips['strip1'].get('G')), 0)
        pi.set_PWM_dutycycle(int(strips['strip2'].get('G')), 0)
        pi.set_PWM_dutycycle(int(strips['strip3'].get('G')), 0)
        pi.set_PWM_dutycycle(int(strips['strip4'].get('G')), 0)

        pi.set_PWM_dutycycle(int(strips['strip1'].get('B')), 0)
        pi.set_PWM_dutycycle(int(strips['strip2'].get('B')), 0)
        pi.set_PWM_dutycycle(int(strips['strip3'].get('B')), 0)
        pi.set_PWM_dutycycle(int(strips['strip4'].get('B')), 0)
        pi.stop()
