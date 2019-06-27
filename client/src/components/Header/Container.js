import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import { logout } from '../../actions/auth';

import Authorization from './Authorization';
import Pages from './Pages';

// const useStyles = makeStyles({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	log: {
// 		display: 'flex',
// 		justifyContent: 'space-between',
// 	},
// 	active: {
// 		color: 'red',
// 	},
// });

const Container = props => {
	const { isAuthenticated, loading, logout, registration, links } = props;

	console.log(links);

	// const classes = useStyles();

	// const authLinks = (
	// 	<Fragment>
	// 		<Button>
	// 			<Link to="/login" onClick={logout}>
	// 				Log Out
	// 			</Link>
	// 		</Button>
	// 	</Fragment>
	// );

	// const guestLinks = (
	// 	<Fragment>
	// 		<Button>
	// 			<Link to="/login">Log In</Link>
	// 		</Button>
	// 		<Button>
	// 			<Link to="/register">Register</Link>
	// 		</Button>
	// 	</Fragment>
	// );

	return (
		<div>
			<div>
				<Authorization
					isAuthenticated={isAuthenticated}
					loading={loading}
					logout={logout}
					registration={registration}
				/>
			</div>

			<div>
				<Pages links={links} />
			</div>

			{/*<div className={classes.root}>*/}
			{/*<AppBar position="static" color="default">*/}
			{/*<Toolbar className={classes.log}>*/}
			{/*<Typography variant="h6" color="inherit">*/}
			{/*<Link exact to="/">*/}
			{/*DancoffeeMen*/}
			{/*</Link>*/}
			{/*</Typography>*/}
			{/*<nav>*/}
			{/*<NavLink exact to="/" activeClassName={classes.active}>*/}
			{/*Main page*/}
			{/*</NavLink>*/}
			{/*<NavLink exact to="/about" activeClassName={classes.active}>*/}
			{/*About*/}
			{/*</NavLink>*/}
			{/*<NavLink exact to="/product-details" activeClassName={classes.active}>*/}
			{/*ProductDetails*/}
			{/*</NavLink>*/}
			{/*<NavLink exact to="/product-grid" activeClassName={classes.active}>*/}
			{/*ProductGrid*/}
			{/*</NavLink>*/}
			{/*<NavLink exact to="/loading" activeClassName={classes.active}>*/}
			{/*Loading*/}
			{/*</NavLink>*/}
			{/*</nav>*/}
			{/*<div>*/}
			{/*<Authorization*/}
			{/*isAuthenticated={isAuthenticated}*/}
			{/*loading={loading}*/}
			{/*logout={logout}*/}
			{/*registration={registration}*/}
			{/*/>*/}
			{/*</div>*/}
			{/*</Toolbar>*/}
			{/*</AppBar>*/}
			{/*</div>*/}
		</div>
	);
};

export default Container;
