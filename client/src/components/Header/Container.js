import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { ShoppingCart, Remove } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

import Authorization from './Authorization';
import Pages from './Pages';
import MobileMenu from './MobileMenu';
import logo from './logo.svg';

const lightPink = pink[400];
const strongGrey = grey[700];

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
	},
	appBar: {
		boxShadow: 'none',
	},
	toolBar: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	title: {
		margin: '0 1.5rem',
		display: 'inline-block',
		color: strongGrey,
		cursor: 'pointer',
		'&:hover': {
			color: lightPink,
		},
	},
	logo: {
		cursor: 'pointer',
	},
	line: {
		margin: '0 .2rem -.55rem .4rem',
		transform: 'rotate(90deg)',
		color: strongGrey,
	},
	icons: {
		whiteSpace: 'nowrap',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'inline-block',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

const StyledBadge = withStyles(theme => ({
	badge: {
		top: '50%',
		right: -3,
		border: `2px solid ${
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
		}`,
	},
}))(Badge);

const Container = props => {
	const { isAuthenticated, loading, logout, registration, links } = props;

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<AppBar className={classes.appBar} position="static" color="default">
				<Toolbar className={classes.toolBar}>
					<div className={classes.logo}>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<div className={classes.sectionDesktop}>
						<Link to="/">
							<Typography variant="h6" className={classes.title}>
								Home
							</Typography>
						</Link>
						<Link to="/products">
							<Typography variant="h6" className={classes.title}>
								Products
							</Typography>
						</Link>
						<Link to="/about">
							<Typography variant="h6" className={classes.title}>
								About Us
							</Typography>
						</Link>
					</div>
					<Pages links={links} />
					<div className={classes.icons}>
						<Authorization
							isAuthenticated={isAuthenticated}
							loading={loading}
							logout={logout}
							registration={registration}
						/>
						<Remove className={classes.line} />
						<Link to="/cart">
							<IconButton aria-label="Cart">
								<StyledBadge badgeContent={4} color="secondary">
									<ShoppingCart />
								</StyledBadge>
							</IconButton>
						</Link>
						<div className={classes.sectionMobile}>
							<Remove className={classes.line} />
							<MobileMenu />
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

Container.defaultProps = {
	isAuthenticated: null,
};

Container.propTypes = {
	isAuthenticated: PropTypes.bool,
	loading: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	registration: PropTypes.arrayOf(PropTypes.object).isRequired,
	links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Container;
