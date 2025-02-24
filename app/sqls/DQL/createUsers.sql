create table users (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	login varchar(150) NOT NULL,
	first_name varchar (150),
	last_name varchar (150),
	patronymic varchar (150),
	passwrd varchar(250),
	role varchar(50) NOT NULL,
	change_dt TIMESTAMP DEFAULT now(),
	is_deleted boolean DEFAULT false
)