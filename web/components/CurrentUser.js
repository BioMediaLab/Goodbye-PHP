import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
	query {
		me {
			id
			email
			name
			permissions
		}
	}
`;

const CurrentUser = (props) => (
	<Query {...props} query={CURRENT_USER_QUERY}>
		{(payload) => props.children(payload)}
	</Query>
);

CurrentUser.propTypes = {
	children: PropTypes.func.isRequired
};

export default CurrentUser;
export { CURRENT_USER_QUERY };
