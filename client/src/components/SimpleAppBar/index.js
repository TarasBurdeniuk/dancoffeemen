import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	log: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	active: {
		color: 'red',
	},
});

const SimpleAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar className={classes.log}>
					<Typography variant="h6" color="inherit">
						<Link exact="true" to="/">
							DancoffeeMen
						</Link>
					</Typography>
					<nav>
						<NavLink exact to="/" activeClassName={classes.active}>
							Main page
						</NavLink>
						<NavLink exact to="/about" activeClassName={classes.active}>
							About
						</NavLink>
						<NavLink exact to="/product" activeClassName={classes.active}>
							Product
						</NavLink>
					</nav>
					<div>
						<Button color="inherit">
							<Link to="/login">Log In</Link>
						</Button>
						<Button color="inherit">
							<Link to="/register">Register</Link>
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default SimpleAppBar;
