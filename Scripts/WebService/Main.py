# coding=utf-8
from flask import Flask, request
import time
from colorPattern import rookie, intermediate, advanced
from account import check_if_account, make_register

# from thread import start_new_thread

app = Flask(__name__)


@app.route('/')
@app.route('/exercise', methods=['GET'])
def level():
    exc_level = request.args.get('level')
    progressive = request.args.get('progressive')
    # ip:5000/exercise?level=rookieOne(Two/Thr) ||
    # ip:5000/exercise?level=intermediateOne(Two/Thr) ||
    # ip:5000/exercise?level=advancedOne(Two/Thr)
    if exc_level:
        if exc_level[0:-3] == 'rookie':
            return rookie(exc_level[-3:])
        elif exc_level[0:-3] == 'intermediate':
            return intermediate(exc_level[-3:])
        elif exc_level[0:-3] == 'advanced':
            return advanced(exc_level[-3:])

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


@app.route('/login', methods=['GET', 'POST'])
def login():
    # if request.method == 'GET':
    account = request.args.get('check')
    check = check_if_account()
    if account == 'yes':
        if not check:
            return 'There is no user registered.'
        return 'The user logged is ' + check['name']
    else:
        name = request.args.get('name')
        age = request.args.get('age', type=int)
        predominant_side = request.args.get('side', default='Right')
        if name and age and predominant_side:
            if check:
                return "There is already an account registered"
            else:
                return make_register(name, age, predominant_side)
    return 404


if __name__ == "__main__":

    app.run(host="0.0.0.0")

