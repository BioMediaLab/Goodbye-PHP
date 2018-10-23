import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MySpan = styled.span`margin-right: 15px;`;

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<MySpan>
					<Link href="/index">
						<a>Home</a>
					</Link>
				</MySpan>
				<MySpan>
					<Link href="/users">
						<a>View Users</a>
					</Link>
				</MySpan>
				<MySpan>
					<Link href="/account">
						<a>Sign in</a>
					</Link>
				</MySpan>
			</div>
		);
	}
}

export default Nav;
