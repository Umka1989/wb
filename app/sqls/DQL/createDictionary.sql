CREATE TABLE IF NOT EXISTS public.dictionary(
	id serial PRIMARY KEY,
	table_name varchar(150) NOT NULL,
	attribute_name varchar(150) NOT NULL,
	translation varchar(150) NOT NULL
)