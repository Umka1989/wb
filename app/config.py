import configparser
config = configparser.ConfigParser()
config.read('config.ini')

DB_CONNECTOR = config['db_connector']