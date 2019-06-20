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
	const [price, setPrice] = useState([15, 55]);

	const handleChangePrice = (event, newPrice) => {
		setPrice(newPrice);
	};

	return (
		<Fragment>
			<Slider
				value={price}
				min={10}
				onChange={handleChangePrice}
				aria-labelledby="range-slider"
			/>
			<Typography variant="subtitle2" className={classes.price}>
				Price: ${price[0]} - ${price[1]}
			</Typography>
		</Fragment>
	);
};

export default ProductPrice;
