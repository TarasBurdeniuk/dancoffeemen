import React from 'react';
import { connect } from 'react-redux';
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
import MobileMenu from './MobileMenu';
import logo from './logo.png';

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
		justifyContent: 'space-between',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'space-around',
		},
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
		display: 'flex',
		alignItems: 'center',
		'& img': {
			width: '38px',
			height: '38px',
			cursor: 'pointer',
		},
	},
	name: {
		display: 'none',
		marginLeft: '.2rem',
		color: '#632e12',
		textDecoration: 'none',
		[theme.breakpoints.up(1160)]: {
			display: 'inline-block',
		},
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
	const { registration, products } = props;

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<AppBar className={classes.appBar} position="static" color="default">
				<Toolbar className={classes.toolBar}>
					<div className={classes.logo}>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
						<Link to="/" className={classes.name}>
							<Typography variant="h6">Coffeemen</Typography>
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
						<Link to="/contact-us">
							<Typography variant="h6" className={classes.title}>
								Contact Us
							</Typography>
						</Link>
					</div>
					<div className={classes.icons}>
						<Authorization registration={registration} />
						<Remove className={classes.line} />
						<Link to="/cart">
							<IconButton aria-label="Cart">
								<StyledBadge badgeContent={products.length} color="secondary">
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

Container.propTypes = {
	registration: PropTypes.arrayOf(PropTypes.object).isRequired,
	products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	products: state.basket.products,
});

export default connect(mapStateToProps)(Container);
