import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import Spinner from '../Loading';
import PropTypes from 'prop-types';

const darkGrey = grey[900];
const lightGrey = grey[50];
const mediumPink = pink[400];
const moreStrongPink = pink[600];

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		fontFamily: "'Lato', 'Roboto', sans-serif",
		fontSize: 13,
		backgroundColor: darkGrey,
		color: lightGrey,
		'& a': {
			color: lightGrey,
		},
	},
	container: {
		width: '1160px',
		margin: '0 auto',
		padding: '10px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	main_block: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	logo: {
		'& a': {
			textDecoration: 'none',
		},
		fontSize: '26px',
		'& span': {
			color: mediumPink,
			transition: '0.5s',
			'&:hover': {
				color: moreStrongPink,
				transition: '0.5s',
			},
		},
	},
	block: {
		boxSizing: 'border-box',
		width: '250px',
		margin: '5px 0',
		padding: 5,
		'& ul': {
			listStyleType: 'none',
			'& li': {
				margin: '5px 0',
			},
		},
	},
	link: {
		textDecoration: 'none',
		transition: '0.5s',
		margin: '5px 0',
		'&:hover': {
			color: mediumPink,
			transition: '0.5s',
		},
	},
	info: {
		display: 'none',
	},
	'@media screen and (min-width:1160px)': {
		info: {
			display: 'flex',
		},
		block: {
			margin: '10px 0',
			padding: 10,
		},
		container: {
			padding: '20px 0',
		},
	},
});

const Footer = ({ contact: { contacts, loading } }) => {
	const classes = useStyles();

	return loading ? (
		<Spinner />
	) : (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.main_block}>
					<div className={classes.block}>
						<div className={classes.logo}>
							<Link to="/">
								<span>DanCoffeeMen</span>
							</Link>
						</div>
						<p>
							Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.
						</p>
					</div>
					<div className={classes.block}>
						<h3>Navigation</h3>
						<ul>
							<li>
								<Link to="/" className={classes.link}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/products" className={classes.link}>
									Products
								</Link>
							</li>
							<li>
								<Link to="/contact-us" className={classes.link}>
									Contact Us
								</Link>
							</li>
							<li>
								<Link to="/cart" className={classes.link}>
									Basket
								</Link>
							</li>
						</ul>
					</div>
					<div className={classes.block}>
						<address>
							<a href={`tel: ${contacts.phone}`}>{contacts.phone}</a>
							<br />
							<span>{contacts.workTime}</span>
							<br />
							Written by
							<a href={`mailto:${contacts.email}`}> DanCoffeeMen</a>
						</address>
						<div>
							<h4>{contacts.city}</h4>
							<span>{contacts.address}</span>
							<br />
							<span>{contacts.country}</span>
						</div>
					</div>
					<div className={classes.info}>
						<div className={classes.block}>
							<h3>Info</h3>
							<p>
								Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
								suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel
								hendrerit iriure dolor in hendrerit.
							</p>
						</div>
					</div>
				</div>
				<div>
					<span>Copyright. All right reserved.</span>
				</div>
			</div>
		</div>
	);
};

Footer.propTypes = {
	contacts: PropTypes.object,
	loading: PropTypes.bool,
};

const mapDispatchToProps = ({ contact }) => ({
	contact,
});

export default connect(mapDispatchToProps)(Footer);
