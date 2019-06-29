import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	link: {
		color: '#595959',
		'&:hover': {
			color: '#f50057',
		},
	},
});

const MobileMenu = () => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	function handleMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<Fragment>
			<IconButton
				aria-label="Account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="default"
			>
				<MoreVertIcon />
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
				<Link to="/" className={classes.link}>
					<MenuItem onClick={handleClose}>Home</MenuItem>
				</Link>
				<Link to="/products-grid" className={classes.link}>
					<MenuItem onClick={handleClose}>Products</MenuItem>
				</Link>
				<Link to="/about" className={classes.link}>
					<MenuItem onClick={handleClose}>About Us</MenuItem>
				</Link>
			</Menu>
		</Fragment>
	);
};

export default MobileMenu;
