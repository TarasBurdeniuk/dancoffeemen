import React from 'react';
import injectSheet from 'react-jss';

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		margin: '1rem',
	},
	loading: {
		width: 100,
		height: 100,
		boxSizing: 'border-box',
		borderRadius: '50%',
		borderTop: '10px solid #f51317',
		position: 'relative',
		animation: 'a1 2s linear infinite',
		'&:before': {
			content: '""',
			width: 100,
			height: 100,
			position: 'absolute',
			left: 0,
			top: '-10px',
			boxSizing: 'border-box',
			borderRadius: '50%',
			borderTop: '10px solid #e6a221',
			transform: 'rotate(120deg)',
		},
		'&:after': {
			content: '""',
			width: 100,
			height: 100,
			position: 'absolute',
			left: 0,
			top: '-10px',
			boxSizing: 'border-box',
			borderRadius: '50%',
			borderTop: '10px solid #3498db',
			transform: 'rotate(240deg)',
		},
		'& span': {
			position: 'absolute',
			width: 100,
			height: 100,
			color: '#5f5f5f',
			textAlign: 'center',
			lineHeight: '100px',
			animation: 'a2 2s linear infinite',
			fontFamily: '"Lato",sans-serif',
		},
	},
	'@keyframes a1': {
		to: {
			transform: 'rotate(360deg)',
		},
	},
	'@keyframes a2': {
		to: {
			transform: 'rotate(-360deg)',
		},
	},
};

const Loading = ({ classes }) => {
	return (
		<div className={classes.container}>
			<div className={classes.loading}>
				<span>Loading...</span>
			</div>
		</div>
	);
};

const Spinner = injectSheet(styles)(Loading);

export default Spinner;
