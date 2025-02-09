CREATE TABLE IF NOT EXISTS public.assets_ozon
(
    id serial PRIMARY KEY,
    sku integer NOT NULL,
    feature varchar(100),
    store_name varchar(250),
    cluster varchar(250) NOT NULL,
    article varchar(250) NOT NULL,
    size_name varchar(100) NOT NULL,
    product_name varchar(250) NOT NULL,
    count integer NOT NULL,
    status varchar(35) NOT NULL
)