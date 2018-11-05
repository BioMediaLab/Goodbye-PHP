import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './CurrentUser';

const MyDiv = styled.div`
	margin-left: 15px;
	margin-top: 8px;
	margin-bottom: 7px;
`;
const MyInput = styled.input`margin-left: 29px;`;

const CREATE_USER_MUTATION = gql`
	mutation CREATE_USER_MUTATION($name: String!, $email: String!, $password: String!) {
		createUser(name: $name, email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

class CreateUser extends Component {
	state = {
		name: '',
		email: '',
		passowrd: ''
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<Mutation
				mutation={CREATE_USER_MUTATION}
				variables={this.state}
				refetchQueries={[ { CURRENT_USER_QUERY } ]}
			>
				{(createUser, { loading, error }) => (
					<form
						method="post"
						onSubmit={async (e) => {
							e.preventDefault();
							const res = await createUser();
							Router.push({
								pathname: '/index'
							});
						}}
					>
						<h2>Sign Up</h2>
						<fieldset disabled={loading}>
							<MyDiv>
								<label htmlFor="name">
									Name
									<MyInput
										type="text"
										name="name"
										placeholder="e.g. Donald Trump"
										required
										value={this.state.name}
										onChange={this.handleChange}
									/>
								</label>
							</MyDiv>
							<MyDiv>
								<label htmlFor="email">
									Email
									<MyInput
										type="email"
										name="email"
										placeholder="e.g. dtrump@gmail.com"
										required
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</label>
							</MyDiv>
							<MyDiv>
								<label htmlFor="password">
									Password
									<input
										type="password"
										name="password"
										placeholder="e.g. Password123"
										required
										value={this.state.password}
										onChange={this.handleChange}
										style={{ marginLeft: '6px' }}
									/>
								</label>
							</MyDiv>
							<MyDiv style={{ marginLeft: '90px' }}>
								<button type="submit">Sign up</button>
							</MyDiv>
						</fieldset>
					</form>
				)}
			</Mutation>
		);
	}
}

export default CreateUser;
export { CREATE_USER_MUTATION };
