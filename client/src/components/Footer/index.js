import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: '20px',
	},
	footer: {
		margin: '0 auto',
	},
	text: {
		fontSize: '12px',
		color: 'grey',
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar className={classes.footer}>
					<Typography className={classes.text} variant="h6" color="inherit">
						All rights reserved
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Footer;
