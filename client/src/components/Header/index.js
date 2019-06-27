import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

import Container from './Container';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
	const registration = [
		{ authLink: { route: '/login', text: 'Log Out' } },
		{
			guestLinks: [
				{ route: '/login', text: 'Log In', id: 1 },
				{ route: '/register', text: 'Register', id: 2 },
			],
		},
	];

	const links = [
		{ route: '/', text: 'DancoffeeMen', id: 1 },
		{ route: '/about', text: 'About', id: 2 },
		{ route: '/product-details', text: 'ProductDetails', id: 3 },
		{ route: '/product-grid', text: 'ProductGrid', id: 4 },
		{ route: '/loading', text: 'Loading', id: 5 },
	];

	return (
		<Container
			isAuthenticated={isAuthenticated}
			loading={loading}
			logout={logout}
			registration={registration}
			links={links}
		/>
	);
};

Header.propTypes = {
	isAuthenticated: PropTypes.bool,
	loading: PropTypes.bool,
	logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

const mapDispatchToProps = {
	logout,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
