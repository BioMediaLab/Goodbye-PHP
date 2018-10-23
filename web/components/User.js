import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MySpan = styled.span`margin-right: 15px;`;

class User extends Component {
	render() {
		const { user } = this.props;
		return (
			<div>
				<MySpan>{user.name}</MySpan>
				<MySpan>{user.email}</MySpan>
			</div>
		);
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired
};

export default User;
