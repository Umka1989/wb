CREATE or REPLACE VIEW sales
AS
select id , 'ozon' as table_name, ozon_article as article, size_name, product_name, customer_price_amt as amount,
quantity
from sales_ozon
