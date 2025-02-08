-- comment
CREATE TABLE IF NOT EXISTS public.clasters(
	id serial PRIMARY KEY,
	claster varchar(150) NOT NULL,
	territory varchar(150) NOT NULL
);
