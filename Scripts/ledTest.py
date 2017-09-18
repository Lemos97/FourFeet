import time
import pigpio
from subprocess import call



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
    
    print ("Testing red")

    pi.set_PWM_dutycycle(RedPinO, 255)
    pi.set_PWM_dutycycle(RedPinT, 255)
    pi.set_PWM_dutycycle(RedPinThr, 255)
    pi.set_PWM_dutycycle(RedPinF, 255)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(RedPinO, 70)
    pi.set_PWM_dutycycle(RedPinT, 70)
    pi.set_PWM_dutycycle(RedPinThr, 70)
    pi.set_PWM_dutycycle(RedPinF, 70)
    time.sleep(0.5)
    
    pi.set_PWM_dutycycle(RedPinO, 0)
    pi.set_PWM_dutycycle(RedPinT, 0)
    pi.set_PWM_dutycycle(RedPinThr, 0)
    pi.set_PWM_dutycycle(RedPinF, 0)
    

    print ("testing green")
    pi.set_PWM_dutycycle(GreenPinO, 255)
    pi.set_PWM_dutycycle(GreenPinT, 255)
    pi.set_PWM_dutycycle(GreenPinThr, 255)
    pi.set_PWM_dutycycle(GreenPinF, 255)
    time.sleep(0.5) 

    pi.set_PWM_dutycycle(GreenPinO, 70)
    pi.set_PWM_dutycycle(GreenPinT, 70)
    pi.set_PWM_dutycycle(GreenPinThr, 70)
    pi.set_PWM_dutycycle(GreenPinF, 70)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(GreenPinO, 0)
    pi.set_PWM_dutycycle(GreenPinT, 0)
    pi.set_PWM_dutycycle(GreenPinThr, 0)
    pi.set_PWM_dutycycle(GreenPinF, 0)
    

    print("testing blue")

    pi.set_PWM_dutycycle(BluePinO, 255)
    pi.set_PWM_dutycycle(BluePinT, 255)
    pi.set_PWM_dutycycle(BluePinThr, 255)
    pi.set_PWM_dutycycle(BluePinF, 255)
    time.sleep(0.5) 

    pi.set_PWM_dutycycle(BluePinO, 70)
    pi.set_PWM_dutycycle(BluePinT, 70)
    pi.set_PWM_dutycycle(BluePinThr, 70)
    pi.set_PWM_dutycycle(BluePinF, 70)
    time.sleep(0.5)

    pi.set_PWM_dutycycle(BluePinO, 0)
    pi.set_PWM_dutycycle(BluePinT, 0)
    pi.set_PWM_dutycycle(BluePinThr, 0)
    pi.set_PWM_dutycycle(BluePinF, 0)
    

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

        RedPinT = 13
        GreenPinT = 26
        BluePinT = 21

        RedPinThr = 5
        GreenPinThr = 6
        BluePinThr = 12

        RedPinF = 19
        GreenPinF = 16
        BluePinF = 20
        
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
