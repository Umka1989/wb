CREATE TABLE IF NOT EXISTS public.report(
	id uuid ,
	product_name varchar(250),
	article varchar(250),
	size_name varchar(100) NOT NULL,
    marketplace varchar(4) NOT NULL,
    main_storage integer,
	count_siberia integer,
	count_south integer,
	count_ural integer,
	count_don integer,
	count_far_east integer,
	count_msk_east integer,
	count_msk_west integer,
	count_kaliningrad integer,
	count_kz integer,
	count_spb integer,
	count_volga integer
)