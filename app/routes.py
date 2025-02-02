from app import app, db
from flask import redirect, session, url_for, request, send_from_directory, jsonify
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



@app.route('/login')
def login():
    # TODO записывать ид в сессию
    data = {
        'clientId': 1,
        'errors': []
    }
    return jsonify(data)


@app.route('/dashboard/data', methods=['POST'])
def mainPage():
    return 'Ok', 200

@app.route('/view_report/data/<table>')
def viewReport(table):
    result = db.getTableData(table)
    return jsonify(result[1])

@app.route('/view_report/available_tables')
def tablesList():
    result = db.getAvailableTables()
    print(result[1])
    return jsonify(result[1]['data'])





