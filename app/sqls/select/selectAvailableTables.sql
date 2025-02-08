select table_name as table_name, description as description
from public.tables_dictionary
where is_availabale_to_show = true;