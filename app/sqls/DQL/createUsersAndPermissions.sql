create table users_and_permissions(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	user_id UUID REFERENCES users (id),
	permission varchar(250) NOT NULL
)