create table users_vs_organisations(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	user_id UUID REFERENCES users (id),
	org_id UUID REFERENCES organisations (id)
)