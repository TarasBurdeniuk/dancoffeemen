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

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		boxShadow: 'none',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'inline-block',
		cursor: 'pointer',
	},
}));

const Container = props => {
	const { isAuthenticated, loading, logout, registration, links } = props;

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static" color="default">
				<Toolbar>
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
