select id, login, last_name, first_name,  patronymic, (passwrd != null) as is_registred,
       role, is_deleted
from users;

