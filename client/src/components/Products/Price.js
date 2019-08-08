import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { loadFilteredProducts } from '../../actions/products';

const useStyles = makeStyles({
	price: {
		color: '#787878',
	},
	slider: {
		color: '#f50057',
	},
});

const Price = ({ chosenFilter, loadFilteredProducts }) => {
	const classes = useStyles();
	const [price, setPrice] = useState([...chosenFilter.price]);
	useEffect(() => {
		setPrice(chosenFilter.price);
	}, [chosenFilter.price]);

	const handleChangePrice = (event, newPrice) => {
		setPrice(newPrice);
	};

	const load = price => {
		loadFilteredProducts({
			brands: chosenFilter.brands,
			price: price,
			size: chosenFilter.size,
			startPage: 0,
		});
	};

	return (
		<>
			<Slider
				value={price}
				min={1}
				onChange={handleChangePrice}
				onMouseUp={() => load(price)}
				onTouchEnd={() => load(price)}
				aria-labelledby="range-slider"
				className={classes.slider}
			/>
			<Typography variant="subtitle2" className={classes.price}>
				Price: ${price[0]} - ${price[1]}
			</Typography>
		</>
	);
};

const mapStateToProps = state => ({
	chosenFilter: state.product.chosenFilter,
});

const mapDispatchToProps = {
	loadFilteredProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Price);
