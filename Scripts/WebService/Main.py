from flask import Flask, request

from WebService.colorPattern import colorPattern

# from thread import start_new_thread

app = Flask(__name__)


@app.route('/')
@app.route('/exercise', methods=['GET'])
def level():
    exc_level = request.args.get('level')
    if exc_level:
        if exc_level == 'rookie':
            colorPattern.rookie()
        elif exc_level == 'intermediate':
            colorPattern.intermediate()
        elif exc_level == 'advanced':
            colorPattern.advanced()
        else:
            return 404


if __name__ == "__main__":

    app.run(host="0.0.0.0")
