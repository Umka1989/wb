CREATE TABLE IF NOT EXISTS public.tables_dictionary(
	id serial PRIMARY KEY,
	table_name varchar(150),
	description varchar(150),
	is_availabale_to_show boolean
)

