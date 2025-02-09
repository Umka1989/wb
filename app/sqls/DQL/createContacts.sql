create table contacts (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	user_id UUID REFERENCES users (id),
	contact_type varchar(50) NOT NULL,
	contact varchar(150) NOT NULL
)