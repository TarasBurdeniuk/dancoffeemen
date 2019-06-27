import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const Authorization = props => {
	const { isAuthenticated, loading, logout, registration } = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	function handleMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	const authLink = (
		<MenuItem onClick={handleClose}>
			<Link to={registration[0].authLink.route} onClick={logout}>
				{registration[0].authLink.text}
			</Link>
		</MenuItem>
	);

	const guestLinks = registration[1].guestLinks.map(link => (
		<MenuItem key={link.id} onClick={handleClose}>
			<Link to={link.route}>{link.text}</Link>
		</MenuItem>
	));

	return (
		<Fragment>
			<IconButton
				aria-label="Account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="secondary"
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

export default Authorization;
