import React from 'react';

import Container from './Container';

const Header = () => {
	const registration = [
		{
			authLink: [
				{ route: '/login', text: 'Log Out', id: 1 },
				{ route: '/dashboard', text: 'Dashboard', id: 2 },
			],
		},
		{
			guestLinks: [
				{ route: '/login', text: 'Log In', id: 1 },
				{ route: '/register', text: 'Register', id: 2 },
			],
		},
	];

	return <Container registration={registration} />;
};

export default Header;
