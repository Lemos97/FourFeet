import os
import json
import os.path
import datetime

file = 'login.json'
os.chdir('../../data')


def check_if_account():
    if os.path.exists(file):
        with open(file, 'r') as fp:
            account = json.load(fp)
        return account
    else:
        return False


def make_register(name, age, predominant_side):
    try:
        account = {
            'name': name,
            'age': age,
            'predominant_side': predominant_side,
            'register_date': str(datetime.datetime.now().strftime('%d-%m-%Y %H:%M:%S'))
        }

        if not check_if_account():
            with open(file, 'w+') as fp:
                try:
                    json.dump(account, fp, ensure_ascii=True, indent=4)
                finally:
                    fp.close()
                    return check_if_account()
    except IOError:
        return json.dumps({'response': 'Unable to create.'}, sort_keys=True, indent=4, separators=(',', ': '))


def main():
    pass


if __name__ == '__main__':
    main()


