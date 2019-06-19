import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	price: {
		color: '#787878',
	},
});

const ProductPrice = () => {
	const classes = useStyles();
	const [value, setValue] = useState([15, 55]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Fragment>
			<Slider value={value} min={10} onChange={handleChange} aria-labelledby="range-slider" />
			<Typography variant="subtitle2" className={classes.price}>
				Price: ${value[0]} - ${value[1]}
			</Typography>
		</Fragment>
	);
};

export default ProductPrice;
