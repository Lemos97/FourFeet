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
        if exc_level == 'rookie':
            return rookie()
        elif exc_level == 'intermediate':
            return intermediate()
        elif exc_level == 'advanced':
            return advanced()

    # ip:5000/exercise?progressive=yes || ip:5000/exercise?progressive=Yes
    if progressive:
        if progressive == 'yes' or progressive == 'Yes':
            rookie()
            time.sleep(5)
            intermediate()
            time.sleep(7)
            advanced()
            return "## Progressive mode ended ##"

    return 404


if __name__ == "__main__":

    app.run(host="0.0.0.0")

