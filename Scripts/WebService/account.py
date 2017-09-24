import json
import os.path
import dateutils

file = '..\\..\\data\\login.json'


def check_if_account():
    if os.path.exists(file):
        with open(file, 'r') as fp:
            account = json.loads(fp)
        return account
    else:
        return False


def make_register(name, age, predominant_side):

    try:
        account = {
            'name': name,
            'age': age,
            'predominant_side': predominant_side,
            'register_date': str(dateutils.datetime.now().strftime('%d-%m-%Y %H:%M:%S'))
        }

        if not check_if_account():
            with open(file, 'w+') as fp:
                try:
                    json.dump(account, fp, ensure_ascii=True, indent=4)
                finally:
                    fp.close()
        print('Account created')
    except IOError:
        if check_if_account():
            os.remove(file)
        else:
            pass
        print('Unable to register')


def main():
    pass
    # name = input("What is your name? ")
    # #########
    # age = input("How old are you? ")
    # try:
    #     age_value = int(age)
    # except ValueError:
    #     age = None
    #     print('Age value must be an int')
    # #########
    # side = input("What is your predominant side? ")
    # if side.lower() == 'left' or side.lower() == 'right':
    #     pass
    # else:
    #     side = None
    #     print('Side values must be "right" or "left"')
    # #########
    # if name and age and side:
    #     print('register on going')
    #     make_register(name, int(age), side)
    # else:
    #     print('You probably didn`t fill the fields correctly')
    #     main()


if __name__ == '__main__':
    main()


