CREATE TABLE IF NOT EXISTS public.assets_wb
(
    id serial PRIMARY KEY,
    brand character varying(10) COLLATE pg_catalog."default" NOT NULL,
    item_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    article character varying(250) COLLATE pg_catalog."default" NOT NULL,
    size_ character varying(35) COLLATE pg_catalog."default" NOT NULL,
    status character varying(35) COLLATE pg_catalog."default" NOT NULL,
    count integer NOT NULL
)