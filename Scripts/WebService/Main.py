from flask import Flask, render_template, request
# from colorPattern import *
# from thread import start_new_thread

app = Flask(__name__)


@app.route('/exercise', methods=['GET'])
def level():
    exc_level = request.args.get('level')
    if exc_level:
        if exc_level == 'rookie':
            print('rookie level')
            # rookie()
        elif exc_level == 'intermediate':
            print('intermediate level')
            # intermediate()
        elif exc_level == 'advanced':
            print('advanced level')
            # advanced()
        else:
            return 404


# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         do_the_login()
#     else:
#         show_the_login_form()


if __name__ == "__main__":

    app.run(host="0.0.0.0")
