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
    #   getting a list of 15 colors
    for r in range(0, 15):
        x = randint(0, 255)
        colors.append(x)
    return colors


def random_strip():

    #   trying more randomness doing a three randoms of random of a list
    rand = [list(choice(list(strips))) for i in range(0, 3)]
    rand_of_rands = choice(rand)
    strip = dict(strip=strips[str(rand_of_rands)])
    return strip


def random_color_random_strip(sleep):
    s = random_strip()
    #   selecting the random strip and each led chooses a random number from 0 to 255(out of a list of 15 numbers)
    pi.set_PWM_dutycycle(int(s['strip'].get('R')), choice(random_color()))
    pi.set_PWM_dutycycle(int(s['strip'].get('G')), choice(random_color()))
    pi.set_PWM_dutycycle(int(s['strip'].get('B')), choice(random_color()))
    time.sleep(sleep)
    pi.set_PWM_dutycycle(int(s['strip'].get('R')), 0)
    pi.set_PWM_dutycycle(int(s['strip'].get('G')), 0)
    pi.set_PWM_dutycycle(int(s['strip'].get('B')), 0)


if __name__ == "__main__":
    pi = pigpio.pi()

    try:
        for i in range(1, 15):
            random_color_random_strip(1)

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
