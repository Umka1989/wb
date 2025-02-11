from app import app, db, auth
from flask import redirect, session, jsonify, request
from functools import wraps


#Проверка авторизации пользователя
def sessionRequired(function):
    @wraps(function)
    def wrapper():
        if 'login' not in session:
            return redirect('/login')
        else:
            return function()
    return wrapper



@app.route('/login', methods=['POST'])
def login():
    # TODO записывать ид в сессию
    data = request.get_json()
    result = auth.authentificate(data['login'], data['psswrd'])
    print(result)
    return jsonify(result)

@app.route('/register', methods=['POST'])
def register():
    # TODO set password and auth

    return jsonify('ok')

@app.route('/users/', defaults={'id': None}, methods=['GET', 'POST', 'PUT', 'DELETE'])
def users(id):
    if (request.method=='GET'):
        result, data = auth.getUsersList()
        return jsonify(data)
    elif (request.method=='POST'):
        return jsonify('ok')
    elif (request.method=='PUT'):
        return jsonify('ok')
    elif (request.method=='DELETE'):
        return jsonify('ok')

@app.route('/dashboard/data/<src>')
def mainPage(src):
    result = db.getMainReport(src)
    newHeaders = db.getTableHeaders('report', result[1]['headers'])[1]['data']
    for idx, each in enumerate(result[1]['headers']):
        for id, header in enumerate(newHeaders):
            if header[0] == each:
                result[1]['headers'][idx] = newHeaders[id][1]
    print(result[1])
    return jsonify(result[1])

@app.route('/view_report/data/<table>')
def viewReport(table):
    result = db.getTableData(table)
    newHeaders = db.getTableHeaders(table, result[1]['headers'])[1]['data']
    for idx, each in enumerate(result[1]['headers']):
        for id, header in enumerate(newHeaders):
            if header[0] == each:
                result[1]['headers'][idx] = newHeaders[id][1]
    return jsonify(result[1])

@app.route('/view_report/available_tables')
def tablesList():
    result = db.getAvailableTables()
    print(result[1])
    return jsonify(result[1]['data'])





