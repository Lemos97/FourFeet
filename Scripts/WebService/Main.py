# coding=utf-8
from flask import Flask, request, jsonify
import time
import json
from colorPattern import rookie, intermediate, advanced, loop, welcome_pattern
from account import check_if_account, make_register

# from thread import start_new_thread

app = Flask(__name__)


@app.route('/')
def home():
    welcome_pattern()


@app.route('/login', methods=['GET'])
def login():
    try:
        check = check_if_account()
        if not check:
            #   ip/login?name=Example&age=99&side=Right to register account
            name = request.args.get('name')
            age = request.args.get('age', type=int)
            gender = request.args.get('gender')
            predominant_side = request.args.get('side', default='Ambidextro')
            if name and age and gender:
                return jsonify(make_register(name, age, gender, predominant_side))
        else:
            return json.dumps(check)
    except ConnectionError:
        return 404


@app.route('/exercise', methods=['GET'])
def colors():
    exc_pattern = request.args.get('difficulty')
    exc_level = request.args.get('level', type=int)
    progressive = request.args.get('progressive')
    infinite = request.args.get('infinite')
    # ip:5000/exercise?difficulty=rookie&level=1(2,3) ||
    # ip:5000/exercise?difficulty=intermediate&level=1(2,3) ||
    # ip:5000/exercise?difficulty=advanced&level=1(2,3)
    if exc_pattern:
        if exc_pattern == 'rookie':
            return jsonify(rookie(exc_level if not None else 0))
        elif exc_pattern == 'intermediate':
            return jsonify(intermediate(exc_level if not None else 0))()
        elif exc_pattern == 'advanced':
            return jsonify(advanced(exc_level if not None else 0))

    # ip:5000/exercise?progressive=yes || ip:5000/exercise?progressive=Yes
    if progressive:
        if progressive == 'yes' or progressive == 'Yes':
            rookie(None)
            time.sleep(5)
            intermediate(None)
            time.sleep(7)
            advanced(None)
            return jsonify({'response': 'Progressive mode ended.'})

    if infinite:
        if infinite == 'yes' or infinite == 'Yes':
            loop()

    return 404


if __name__ == "__main__":

    app.run(host="0.0.0.0")

