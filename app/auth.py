from app import db
import hashlib

def authentificate(login, passw):
    script = open('./app/sqls/select/selectOneuser.sql', 'r').read().format(login)
    result, clientData = db.executeQuery('one', script)
    print(clientData)
    passwHash = hashlib.sha256(passw.encode('utf-8')).hexdigest()
    if (result):
        if (passwHash == clientData[2]) :
            return (True, clientData[1])
        else:
            return (False, 'Некорректный пароль')
    else:
        return (False, 'Пользователь с таким логином не найден')

def register(login, passw):
    script = open('./app/sqls/update/updatePasswrd.sql', 'r').read().format(login, passw)
    result = db.executeQuery('script', script)
    if result[1] > 0 :
        return (True, login)
    else:
        return (False, 'Пароль не задан')

def createUser(login, role):
    script = open('./app/sqls/insert/insertUser.sql', 'r').read().format(login, role)
    result = db.executeQuery('script', script)
    if result[1] > 0:
        return (True, login)
    else:
        return (False, 'Пользователь не создан')

def deleteUser(id):
    script = open('./app/sqls/update/deleteUser.sql', 'r').read().format(id)
    result = db.executeQuery('script', script)
    if result[1] > 0:
        return (True, id)
    else:
        return (False, 'Пользователь не удалён')

def getUsersList():
    script = open('./app/sqls/select/selectAllUsers.sql', 'r').read()
    result = db.executeQuery('many', script)
    return result

