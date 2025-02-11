select id, login, first_name, last_name, patronymic, (passwrd != null) as is_registred,
       role, is_deleted
from users;

