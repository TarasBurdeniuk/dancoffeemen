import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MapContainer from './MapContainer';
import Spinner from '../Loading';
import grey from '@material-ui/core/colors/grey';

const strongGrey = grey[600];

const useStyles = makeStyles({
	root: {
		fontFamily: "'Lato', 'Roboto', sans serif",
		fontSize: 15,
		minHeight: '100vh',
		'& a': {
			color: strongGrey,
		},
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		padding: '10px',
		margin: '0 auto',
		maxWidth: 1160,
	},
	contactItem: {
		textAlign: 'left',
		lineHeight: '20px',
		fontSize: 16,
		'& address': {
			fontStyle: 'normal',
		},
	},
	title: {
		textTransform: 'uppercase',
		fontSize: 20,
		textDecoration: 'underline',
		paddingBottom: '8px',
	},
	mapContainer: {
		height: '65vh',
		position: 'relative',
	},
	'@media screen and (min-width:768px)': {
		container: {
			flexDirection: 'row',
			padding: '30px 200px',
		},
	},
});

const ContactUs = ({ contact: { contacts, loading } }) => {
	const classes = useStyles();

	return loading ? (
		<Spinner />
	) : (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.contactItem}>
					<address>
						<p className={classes.title}>address</p>
						<h4>Coffeemen</h4>
						<h4>
							{contacts.country}, {contacts.city}, {contacts.address}
						</h4>
						<p className={classes.title}>contact</p>
						<p>Phone:</p>
						<h5>
							<a href={`tel: ${contacts.phone}`}>{contacts.phone} </a>
						</h5>
						<p>Email:</p>
						<h5>
							<a href={`mailto:${contacts.email}`}> DanCoffeeMen</a>
						</h5>
					</address>
				</div>
			</div>
			<div className={classes.mapContainer}>
				<MapContainer />
			</div>
		</div>
	);
};

const mapStateToProps = ({ contact }) => ({
	contact,
});

export default connect(mapStateToProps)(ContactUs);
