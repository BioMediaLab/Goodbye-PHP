import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
const ALL_USERS_QUERY = gql`
	query ALL_USERS_QUERY {
		users {
			id
			name
			email
		}
	}
`;

class Users extends Component {
	render() {
		return (
			<div>
				<p>Users</p>
				<Query query={ALL_USERS_QUERY}>
					{({ data, error, loading }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error: {error.message}</p>;
						return <div>{data.users.map((user) => <User user={user} key={user.id} />)}</div>;
					}}
				</Query>
			</div>
		);
	}
}

export default Users;
export { ALL_USERS_QUERY };
