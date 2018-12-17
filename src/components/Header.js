import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Nav = styled.div`
	display: flex;
	flex-flow: row-reverse;
	align-items: center;
	padding: 20px;
	box-shadow: 0 1px 5px #000;
	a {
		margin: 0 10px;
		text-decoration: none;
		text-transform: uppercase;
		color: #000;
		font-weight: 800;
		&:hover {
			color: darkmagenta;
		}
	}
	h2 {
		text-transform: capitalize;
		order: 9;
		margin: 0;
		margin-right: auto;
	}
`;

const Header = props => {
	const { pathname } = props.location;
	return (
		<Nav>
			<h2>
				Board: <span>{pathname.slice(1)}</span>
			</h2>
			<Link to="/primary">Primary</Link>
			<Link to="/secondary">Secondary</Link>
			<Link to="/draft">Drafts</Link>
		</Nav>
	);
};

export default withRouter(Header);
