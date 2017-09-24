from flask import Flask, request
import time
from colorPattern import rookie, intermediate, advanced

# from thread import start_new_thread

app = Flask(__name__)


@app.route('/')
@app.route('/exercise', methods=['GET'])
def level():
    exc_level = request.args.get('level')
    progressive = request.args.get('progressive')
    # ip:5000/exercise?level=rookie ||
    # ip:5000/exercise?level=intermediate ||
    # ip:5000/exercise?level=advanced
    if exc_level:
        if exc_level[0, -3] == 'rookie':
            return rookie(exc_level[-3:])
        elif exc_level[0, -3] == 'intermediate':
            return intermediate(exc_level[-3:])
        elif exc_level[0, -3] == 'advanced':
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


if __name__ == "__main__":

    app.run(host="0.0.0.0")

