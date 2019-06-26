import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';

const useStyles = makeStyles({
	dark: {
		fontSize: 24,
		color: '#dfdfdf',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	lit: {
		fontSize: 24,
		color: '#ffe600',
		'&:hover': {
			cursor: 'pointer',
		},
	},
});

const StarsRate = () => {
	const classes = useStyles();

	const [starsRate, setStarsRate] = useState(3);

	const handleChangeRate = num => {
		setStarsRate(num);
	};

	let starLightOne = 'dark';
	let starLightTwo = 'dark';
	let starLightThree = 'dark';
	let starLightFour = 'dark';
	let starLightFive = 'dark';

	switch (starsRate) {
		case 1:
			starLightOne = 'lit';
			break;
		case 2:
			starLightOne = 'lit';
			starLightTwo = 'lit';
			break;
		case 3:
			starLightOne = 'lit';
			starLightTwo = 'lit';
			starLightThree = 'lit';
			break;
		case 4:
			starLightOne = 'lit';
			starLightTwo = 'lit';
			starLightThree = 'lit';
			starLightFour = 'lit';
			break;
		case 5:
			starLightOne = 'lit';
			starLightTwo = 'lit';
			starLightThree = 'lit';
			starLightFour = 'lit';
			starLightFive = 'lit';
			break;
		default:
			starLightOne = 'dark';
			starLightTwo = 'dark';
			starLightThree = 'dark';
			starLightFour = 'dark';
			starLightFive = 'dark';
	}

	return (
		<div>
			<Star className={classes[starLightOne]} onClick={() => handleChangeRate(1)} />
			<Star className={classes[starLightTwo]} onClick={() => handleChangeRate(2)} />
			<Star className={classes[starLightThree]} onClick={() => handleChangeRate(3)} />
			<Star className={classes[starLightFour]} onClick={() => handleChangeRate(4)} />
			<Star className={classes[starLightFive]} onClick={() => handleChangeRate(5)} />
		</div>
	);
};

export default StarsRate;
