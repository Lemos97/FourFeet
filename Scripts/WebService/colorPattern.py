import time
import pigpio
from random import *
from subprocess import call


pi = pigpio.pi()

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
done_strips = []


def random_color():
    colors = []
    #   getting a list of 15 colors
    for r in range(0, 15):
        x = randint(0, 255)
        colors.append(x)
    return colors


def random_strip():
    #   trying more randomness doing a three randoms of random of a list
    rand = [choice(list(strips)) for i in range(0, 3)]
    rand_of_rands = choice(rand)
    strip = dict(strip=strips[str(rand_of_rands)])
    return strip


def random_color_random_strip(sleep):
    #   selecting the random strip and each led chooses a random number from 0 to 255
    #   (out of a list of 15 numbers)
    s = random_strip()
    if len(done_strips) is 0:
        pi.set_PWM_dutycycle(int(s['strip'].get('R')), choice(random_color()))
        pi.set_PWM_dutycycle(int(s['strip'].get('G')), choice(random_color()))
        pi.set_PWM_dutycycle(int(s['strip'].get('B')), choice(random_color()))
        time.sleep(sleep)
        pi.set_PWM_dutycycle(int(s['strip'].get('R')), 0)
        pi.set_PWM_dutycycle(int(s['strip'].get('G')), 0)
        pi.set_PWM_dutycycle(int(s['strip'].get('B')), 0)
        done_strips.append(s)
    else:
        if done_strips[-1]['strip'].get('R') == s['strip'].get('R'):
            random_color_random_strip(sleep)
        else:
            pi.set_PWM_dutycycle(int(s['strip'].get('R')), choice(random_color()))
            pi.set_PWM_dutycycle(int(s['strip'].get('G')), choice(random_color()))
            pi.set_PWM_dutycycle(int(s['strip'].get('B')), choice(random_color()))
            time.sleep(sleep)
            pi.set_PWM_dutycycle(int(s['strip'].get('R')), 0)
            pi.set_PWM_dutycycle(int(s['strip'].get('G')), 0)
            pi.set_PWM_dutycycle(int(s['strip'].get('B')), 0)
            done_strips.append(s)


def rookie():
    for i in range(0, 10):
        random_color_random_strip(2.5)
    for i in range(0, 10):
        random_color_random_strip(2.2)
    for i in range(0, 10):
        random_color_random_strip(2)

    return 2 * '#' + ' rookie ended ' + 2 * '#'


def intermediate():
    for i in range(0, 10):
        random_color_random_strip(1.5)
    for i in range(0, 10):
        random_color_random_strip(1.2)
    for i in range(0, 10):
        random_color_random_strip(1)
    return 2 * '#' + ' intermediate ended ' + 2 * '#'


def advanced():
    for i in range(1, 10):
        random_color_random_strip(float(.5))
    for i in range(1, 10):
        random_color_random_strip(float(.4))
    for i in range(1, 10):
        random_color_random_strip(float(.3))
    return 2 * '#' + ' advanced ended ' + 2 * '#'


# if __name__ == "__main__":
#
#
#     try:
#         print(20*'#')
#         print(6*'-'+'FourFeet'+6*'-')
#         print('1.- Rookie')
#         print('2.- Intermediate')
#         print('3.- Advanced')
#         print('4.- Exit')
#         print(20*'#')
#
#         level = input('Which level you wanna try out? ')
#
#         if level is 1:
#             print('Rookie it is')
#             rookie()
#         elif level is 2:
#             print('Intermediate it is')
#             intermediate()
#         elif level is 3:
#             print('Advanced it is')
#             advanced()
#         else:
#             pi.set_PWM_dutycycle(int(strips['strip1'].get('R')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip2'].get('R')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip3'].get('R')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip4'].get('R')), 0)
#
#             pi.set_PWM_dutycycle(int(strips['strip1'].get('G')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip2'].get('G')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip3'].get('G')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip4'].get('G')), 0)
#
#             pi.set_PWM_dutycycle(int(strips['strip1'].get('B')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip2'].get('B')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip3'].get('B')), 0)
#             pi.set_PWM_dutycycle(int(strips['strip4'].get('B')), 0)
#             pi.stop()
#
#     except KeyboardInterrupt:
#         pi.set_PWM_dutycycle(int(strips['strip1'].get('R')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip2'].get('R')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip3'].get('R')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip4'].get('R')), 0)
#
#         pi.set_PWM_dutycycle(int(strips['strip1'].get('G')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip2'].get('G')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip3'].get('G')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip4'].get('G')), 0)
#
#         pi.set_PWM_dutycycle(int(strips['strip1'].get('B')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip2'].get('B')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip3'].get('B')), 0)
#         pi.set_PWM_dutycycle(int(strips['strip4'].get('B')), 0)
#         pi.stop()

def main():
    pass


if __name__ == '__main__':
    main()
