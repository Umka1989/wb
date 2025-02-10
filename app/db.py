import psycopg2
import pandas as pd
from app import config

tables = {
    'sales': open('./app/sqls/select/selectSales.sql', 'r').read(),
    'assets':   open('./app/sqls/select/selectAssets.sql', 'r').read(),
    'availableTables': open('./app/sqls/select/selectAvailableTables.sql', 'r').read()
}


def connect():
    return psycopg2.connect(
        database=config.DB_CONNECTOR['db_name'],
        user=config.DB_CONNECTOR['db_user'],
        password=config.DB_CONNECTOR['db_password'],
        host=config.DB_CONNECTOR['db_host'],
        port=config.DB_CONNECTOR['db_port']
    )

def executeQuery(type_, script):
    with connect() as conn:
        with conn.cursor() as cur:
            if type_ == 'script':
                cur.execute(script)
                result = (True, cur.rowcount)
            elif type_ == 'one':
                cur.execute(script)
                result = (True, {'data': cur.fetchone(), 'headers':[desc[0] for desc in cur.description]})
            elif type_ == 'many':
                cur.execute(script)
                result = (True, {'data': cur.fetchall(), 'headers':[desc[0] for desc in cur.description]})
            else:
                result = (False,)
            return result


def getTableData(script, headerScript, countScript, offset, count):
    with connect() as conn:
        df = pd.read_sql_query(script, conn)
        header = executeQuery('one', headerScript)[0]
        data = {
            'data': df.to_dict(orient='dict'),
            'offset': offset+count,
            'totalCount': executeQuery('one', countScript)[0],
            'header': header
        }

        return data

def getAvailableTables():
    script = tables['availableTables']
    return executeQuery('many', script)

def getTableData(count_, table):
    return executeQuery(count_, tables[table])











