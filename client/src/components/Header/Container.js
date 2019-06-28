import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { NavLink, Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import Button from '@material-ui/core/Button';

import Authorization from './Authorization';
import Pages from './Pages';
import logo from './logo.svg';

const useStyles = makeStyles({
	container: {
		flexGrow: 1,
		marginBottom: '1rem',
	},
	appBar: {
		boxShadow: 'none',
	},
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	title: {
		display: 'inline-block',
		cursor: 'pointer',
	},
	logo: {
		cursor: 'pointer',
	},
});

const Container = props => {
	const { isAuthenticated, loading, logout, registration, links } = props;

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<AppBar className={classes.appBar} position="static" color="default">
				<Toolbar className={classes.toolBar}>
					<div className={classes.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div>
						<Typography variant="h6" className={classes.title}>
							Home
						</Typography>
						<Typography variant="h6" className={classes.title}>
							Products
						</Typography>
						<Typography variant="h6" className={classes.title}>
							About Us
						</Typography>
					</div>
					<Pages links={links} />
					<Authorization
						isAuthenticated={isAuthenticated}
						loading={loading}
						logout={logout}
						registration={registration}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Container;
