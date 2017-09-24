import os
import json
import os.path
import datetime

file = 'login.json'
os.chdir('../../data')

def check_if_account():
    
##    cwd = os.getcwd()
##    print(cwd)
    
    if os.path.exists(file):
        with open(file, 'r') as fp:
            account = json.load(fp)
        #print('account created', account, os.path.abspath(file))            
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
                    return ('Account registered')
    except IOError:
##        if check_if_account():
##            os.remove(file)
##        else:
##            pass
        print('Unable to register')


def main():
    #check_if_account()
    
    pass
##     name = input("What is your name? ")
##     #########
##     age = input("How old are you? ")
##     try:
##         age_value = int(age)
##     except ValueError:
##         age = None
##         print('Age value must be an int')
##     #########
##     side = input("What is your predominant side? ")
##     if side.lower() == 'left' or side.lower() == 'right':
##         pass
##     else:
##         side = None
##         print('Side values must be "right" or "left"')
##     #########
##     if (name and age and side) and check_if_account() == False:
##         print('register on going')
##         make_register(name, int(age), side)
##     else:
##         print('You probably didn`t fill the fields correctly')
##         main()

if __name__ == '__main__':
    main()


