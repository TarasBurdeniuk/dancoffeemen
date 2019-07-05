import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

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
		{ route: '/products', text: 'Products', id: 3 },
		{ route: '/product-details', text: 'ProductDetails', id: 4 },
		{ route: '/loading', text: 'Loading', id: 5 },
		{ route: '/cart', text: 'Cart', id: 6 },
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
	auth: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
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
