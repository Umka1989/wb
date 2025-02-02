CREATE or REPLACE VIEW assets
AS
select id , 'ozon' as table_name, storage_name, article, product_name, avalible_to_sale as count_
from assets_ozon
union
select id , 'wb' as table_name, storage as storage_name, article, type_name, total_by_storage as count_
from assets_wb;
