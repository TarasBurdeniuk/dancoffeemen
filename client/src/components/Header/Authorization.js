import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	link: {
		color: '#595959',
		'&:hover': {
			color: '#f50057',
		},
	},
});

const Authorization = props => {
	const { isAuthenticated, loading, logout, registration } = props;

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	function handleMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	const authLink = (
		<Link to={registration[0].authLink.route} onClick={logout} className={classes.link}>
			<MenuItem onClick={handleClose}>{registration[0].authLink.text}</MenuItem>
		</Link>
	);

	const guestLinks = registration[1].guestLinks.map(link => (
		<Link key={link.id} to={link.route} className={classes.link}>
			<MenuItem onClick={handleClose}>{link.text}</MenuItem>
		</Link>
	));

	return (
		<Fragment>
			<IconButton
				aria-label="Account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="default"
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={handleClose}
			>
				{!loading && (isAuthenticated ? authLink : guestLinks)}
			</Menu>
		</Fragment>
	);
};

Authorization.defaultProps = {
	isAuthenticated: null,
};

Authorization.propTypes = {
	isAuthenticated: PropTypes.bool,
	loading: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	registration: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Authorization;
