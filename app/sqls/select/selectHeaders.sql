select attribute_name, translation
from dictionary
where table_name = '{0}'
and attribute_name in ({1});