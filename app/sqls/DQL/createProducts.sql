create table public.products as 

select distinct gen_random_uuid() as id, article, product_name from (
select distinct article as article, type_name as product_name from assets_wb
union
select distinct article as article, product_name as product_name from assets_ozon
union
select distinct article as article, type_name as product_name from assets_1c) as product;