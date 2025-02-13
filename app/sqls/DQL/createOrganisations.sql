create table organisations(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	org_name varchar (250) NOT NULL,
	org_form varchar (35)
)