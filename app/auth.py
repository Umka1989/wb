from app import db
import hashlib

def authentificate(login, passw):
    script = db.tables['users'].format(login)
    result, clientData = db.getTableData('one', script)
    passwHash = hashlib.sha256(passw.encode('utf-8')).hexdigest()
    if (result):
        if (passwHash == clientData[2]) :
            return (True, clientData[0])
        else:
            return (False, 'Некорректный пароль')
    else:
        return (False, 'Пользователь с таким логином не найден')

def register(login, passw):

    script = db.tables['users'].format(login)
    return True

def createUser(login, role):
    return True

def deleteUser(id):
    return True

