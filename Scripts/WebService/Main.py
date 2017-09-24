# coding=utf-8
from flask import Flask, request
import time
import json
from colorPattern import rookie, intermediate, advanced
from account import check_if_account, make_register

# from thread import start_new_thread

app = Flask(__name__)


@app.route('/')
@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        check = check_if_account()
        if not check:
            #   ip/login?name=Example&age=99&side=Right to register account
            name = request.args.get('name')
            age = request.args.get('age', type=int)
            predominant_side = request.args.get('side', default='Right')
            if name and age and predominant_side:
                return make_register(name, age, predominant_side)
        else:
            return json.dumps(check)
    except ConnectionError:
        return 404


@app.route('/exercise', methods=['GET'])
def colors():
    exc_pattern = request.args.get('pattern')
    exc_level = request.args.get('level', type=int)
    progressive = request.args.get('progressive')
    # ip:5000/exercise?level=rookieOne(Two/Thr) ||
    # ip:5000/exercise?level=intermediateOne(Two/Thr) ||
    # ip:5000/exercise?level=advancedOne(Two/Thr)
    if exc_level:
        if exc_pattern == 'rookie':
            return rookie(exc_level)
        elif exc_pattern == 'intermediate':
            return intermediate(exc_level)
        elif exc_pattern == 'advanced':
            return advanced(exc_level)

    # ip:5000/exercise?progressive=yes || ip:5000/exercise?progressive=Yes
    if progressive:
        if progressive == 'yes' or progressive == 'Yes':
            rookie(None)
            time.sleep(5)
            intermediate(None)
            time.sleep(7)
            advanced(None)
            return "## Progressive mode ended ##"

    return 404


if __name__ == "__main__":

    app.run(host="0.0.0.0")

