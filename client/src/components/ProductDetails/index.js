import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Details from './Details';
import { getProduct } from '../../actions/products';
import { addToBasket } from '../../actions/basket';
import Spinner from '../Loading';

const ProductDetailsContainer = ({ match, getProduct, product, addToBasket }) => {
	useEffect(() => {
		getProduct(match.params.id);
	}, [match.params.id, getProduct]);

	const [addQuantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		if (!product.status || addQuantity >= product.quantity) {
			return;
		}
		setQuantity(addQuantity + 1);
	};

	const handleDecrement = () => {
		if (!product.status) {
			return;
		}
		if (addQuantity > 1) {
			setQuantity(addQuantity - 1);
		}
	};

	const handleAddToBasket = product => {
		addToBasket({
			...product,
			addQuantity,
		});
	};

	return product === null ? (
		<Spinner />
	) : (
		<Details
			quantity={addQuantity}
			product={product}
			handleIncrement={handleIncrement}
			handleDecrement={handleDecrement}
			handleAddToBasket={handleAddToBasket}
		/>
	);
};

const mapStateToProps = state => ({
	product: state.product.product,
});

const mapDispatchToProps = {
	getProduct,
	addToBasket,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductDetailsContainer);
