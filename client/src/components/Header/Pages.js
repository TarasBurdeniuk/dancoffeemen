import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Pages = ({ links }) => {
	const navLinks = links.map(link => (
		<NavLink exact key={link.id} to={link.route}>
			{link.text}
		</NavLink>
	));

	return <Fragment>{navLinks}</Fragment>;
};

export default Pages;
