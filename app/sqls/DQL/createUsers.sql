create table users (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	login varchar(150) NOT NULL,
	passwrd varchar(250) NOT NULL,
	role varchar(50) NOT NULL,
	change_dt TIMESTAMP DEFAULT now(),
	is_deleted boolean DEFAULT false
)