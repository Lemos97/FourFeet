#!/usr/bin/python
import RPi.GPIO as GPIO
import time
ObstaclePin =  11

def setup():
	GPIO.setmode(GPIO.BOARD)
	GPIO.setup(ObstaclePin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

def loop():
	while True:
		print GPIO.input(ObstaclePin)
		time.sleep(1)
		if (0 == GPIO.input(ObstaclePin)):
			print "SOMETHING DETECTED CRL"
			

def destroy():
	GPIO.cleanup()

if __name__ == '__main__':
	setup()
	try:
		loop()
	except KeyboardInterrupt:
		destroy()
