insert into report (
select id, article, product_name, size_name, 'ozon',
(select sum(c.quantity) from assets_1c as c
where c.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Сибирь' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Юг' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Урал' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Дон' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Дальний Восток' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Москва-Восток и Дальние регионы' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Москва-Запад' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Калининград' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Казахстан' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Санкт-Петербург и СЗО' and a.article = p.article),
(select sum(a.avalible_to_sale) from assets_ozon as a
where cluster = 'Поволжье' and a.article = p.article)
from products as p
union
select id, article, product_name, size_name, 'wb',
(select sum(c.quantity) from assets_1c as c
where c.article = p.article),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Сибирь' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Юг' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Урал' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Дон' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Дальний Восток' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Москва-Восток и Дальние регионы' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Москва-Запад' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Калининград' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Казахстан' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Санкт-Петербург и СЗО' and wb.article = p.article
and wb.storage = cl.territory),
(select sum(wb.available_for_sale) from assets_wb as wb, clasters as cl
where cl.claster = 'Поволжье' and wb.article = p.article
and wb.storage = cl.territory)
from products as p )
