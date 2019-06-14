import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';

const useStyles = makeStyles({
	icon: {
		fontSize: 24,
		color: '#dfdfdf'
	}
});

const StarsRate = () => {
	const classes = useStyles();

	return (
		<div>
			<Star className={classes.icon} />
			<Star className={classes.icon} />
			<Star className={classes.icon} />
			<Star className={classes.icon} />
			<Star className={classes.icon} />
		</div>
	);
};

export default StarsRate;
