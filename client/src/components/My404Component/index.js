import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const strongGrey = grey[700];

const useStyles = makeStyles({
	container: {
		fontFamily: "'Lato', 'Roboto', sans-serif",
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '10px 10px 200px 10px',
		boxSizing: 'border-box',
		'& h1': {
			color: '#632e12',
			fontSize: 32,
		},
		'& h2': {
			fontSize: 20,
			margin: 20,
			color: strongGrey,
		},
		'& p': {
			textAlign: 'center',
			color: strongGrey,
		},
	},
	'@media screen and (min-width:1160px)': {
		container: {
			padding: '10px 10px 300px 10px',
			'& h1': {
				fontSize: 120,
			},
			'& h2': {
				fontSize: 40,
				margin: 40,
			},
		},
	},
});

const My404Component = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.container}>
				<h1>404</h1>
				<h2>Oops! Nothing was found</h2>
				<p>
					The page you are looking for might have been removed had its name changed or is
					temporarily unavailable. <Link to="/">Return to homepage</Link>
				</p>
			</div>
		</>
	);
};

export default My404Component;
